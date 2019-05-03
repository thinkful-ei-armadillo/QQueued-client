import React, { Component } from "react";
import ApiService from "../../../services/api-service";
import QueueContext from "../../../context/QueueContext";
import EditTicketForm from '../../EditTicketForm/EditTicketForm';
import "../StudentQueue.css";

export class studentWatingNameList extends Component {
  static contextType = QueueContext;
  state = {
    showDeleteButton: null,
    hideEditInput: true
  };

  showDeleteButton = () => {
    this.setState({ showDeleteButton: true }, () => {
      document.addEventListener("click", this.closeDeleteButton);
    });
  };

  closeDeleteButton = e => {
    e.stopPropagation();
    this.setState({ showDeleteButton: false }, () => {
      document.removeEventListener("click", this.closeDeleteButton);
    });
  };

  handleDeleteClick(id) {
    ApiService.removeStudentFromQueue(id).then(() =>
      this.context.removeStudentFromQueue(id)
    );
  };

  toggleEditInput = e => {
    e.stopPropagation()
    this.setState({ hideEditInput: !this.state.hideEditInput });
  }

  handleNameClick(queueUser) {
    const { currentUser } = this.props;

    if (queueUser === currentUser) return this.showDeleteButton();
    else return;
  }

  validateUser = (currentUser, personInLine) => {
    if (currentUser === personInLine) {
      return true;
    }
    return false;
  }

  render() {
    const { personInLine, currentUser } = this.props;
    const { user_name, studentName, id, description } = personInLine;
    return (
      <li key={id} className="eachStudentInQueue">
        <p
          onClick={() => this.handleNameClick(user_name)}
          className="studentNameForQueue"
        >
          {studentName}
        </p>
        {this.state.showDeleteButton && (
          <input
            type="button"
            name="deleteFromQueue"
            onClick={() => this.handleDeleteClick(id)}
            value="leave Waiting List"
          />
        )}
        <input
          type="button"
          onClick={ this.validateUser(currentUser, user_name) ? e => this.toggleEditInput(e) : null }
          value={ description }
          className={ `${this.validateUser(currentUser, user_name) ? 'tooltiptext select' : 'tooltiptext'}`} />
          { this.state.hideEditInput
            ? null
            : <EditTicketForm toggleEditInput={ this.toggleEditInput } id={id} context={this.context} /> }

      </li>
    );
  }
}

export default studentWatingNameList;

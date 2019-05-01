import React, { Component } from "react";
import ApiService from "../../../services/api-service";
import QueueContext from "../../../context/QueueContext";
import "../StudentQueue.css";

export class studentWatingNameList extends Component {
  static contextType = QueueContext;
  state = {
    showDeleteButton: null
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
  }

  handleNameClick(queueUser) {
    const { currentUser } = this.props;

    if (queueUser === currentUser) return this.showDeleteButton();
    else return;
  }

  render() {
    const { personInLine } = this.props;
    return (
      <li key={personInLine.id} className="eachStudentInQueue">
        <p
          onClick={() => this.handleNameClick(personInLine.user_name)}
          className="studentNameForQueue"
        >
          {personInLine.studentName}
        </p>
        {this.state.showDeleteButton && (
          <input
            type="button"
            name="deleteFromQueue"
            onClick={() => this.handleDeleteClick(personInLine.id)}
            value="leave Waiting List"
          />
        )}
        <p className="tooltiptext">{personInLine.description}</p>
      </li>
    );
  }
}

export default studentWatingNameList;

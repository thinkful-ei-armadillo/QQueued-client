import React, { Component } from 'react'

export class studentWatingNameList extends Component {
  state={
    showDeleteButton: null
  }
  showDeleteButton = () => {
    this.setState({showDeleteButton: true}, () => {
      document.addEventListener('click', this.closeDeleteButton)
    });
  }
  closeDeleteButton = e => {
    e.stopPropagation();
    this.setState({showDeleteButton: false}, () => {
      document.removeEventListener('click', this.closeDeleteButton)
    })
  }
  handleDeleteClick (id) {
    console.log(id)
  }
  handleNameClick(queueUser) {
    const {currentUser} = this.props;

    if(queueUser === currentUser)
      return this.showDeleteButton()
    else return;
  }
  
  render() {
    const {personInLine} = this.props;
 
    return (
      <li key={personInLine.id} className="eachStudentInQueue">
        <p
          onClick={() => this.handleNameClick(personInLine.user_name)}
          className="studentName">
          {personInLine.studentName}
        </p>
        {this.state.showDeleteButton && 
          <input type="button" name="deleteFromQueue" onClick={() => this.handleDeleteClick(personInLine.id)}value="leave Waiting List"/>}
        <p className="tooltiptext">{personInLine.description}</p>
      </li>
    )
  }
}

export default studentWatingNameList;

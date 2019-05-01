import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";
import ApiService from "../../services/api-service";
import StudentWaitingNameList from './studentWaitingNameList/studentWatingNameList'

export default class StudentQueue extends Component {
  static contextType = QueueContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.context.webSocket();
    this.context.dequeueWait();
  }
  studentDequeue(id) {
   
    ApiService.removeStudentFromQueue(id)
  }
  renderWaitingListQueue(personInLine, index){
    return ( 
    <li key={index} className="eachStudentInQueue">
      <span
        onClick={() => this.studentDequeue(personInLine.id)}
        className="studentName">
        {personInLine.studentName}
      </span>
      <span className="tooltiptext">{personInLine.description}</span>
    </li>
    )
  }

  render() {
    const {queueList} = this.context;
    const userTickets = queueList.filter(
      el => el.studentName === this.props.user.user.full_name
    );
    const numberInLine = queueList.indexOf(userTickets[0]);
    console.log(this.props.user)
    return (
      <section>
        <div className="studentsMainPage">
          {numberInLine > 0 && <div>You are currently #{numberInLine + 1} in line.</div>}
          {userTickets ? 
            (<div>You have {userTickets.length} open ticket(s).</div>) 
            : (<div>You don't have any tickets open.</div>)}
          <h2 className="studentListTitle">Waiting List</h2>
          <HelpForm className="getHelpButton" />
          <ul className="studentWaitingQueue">
            {queueList.map((listItem, index) => 
              <StudentWaitingNameList key={index} personInLine={listItem} currentUser={this.props.user.user.user_name}/>
            )}
          </ul>
        </div>
      </section>
    );
  }
}



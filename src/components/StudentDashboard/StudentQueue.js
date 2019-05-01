import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";

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

  render() {
    let makeQueue = [];
    let message = [];
    let numberInLine = null;
    if (this.context.queueList.length > 0) {
      message = this.context.queueList.filter(
        i => i.studentName === this.props.user.user.full_name
      );
      numberInLine = this.context.queueList.indexOf(message[0]);
      makeQueue = this.context.queueList.map((i, j) => {
        return (
          <li key={j} className="eachStudentInQueue">
            <div className="studentNameForQueue">
              {i.studentName}
              <span className="tooltiptext">{i.description}</span>
            </div>
          </li>
        );
      });
    }

    let note= ''
    if(this.context.showNote) {
      if(this.context.showNote.user_name === this.props.user.user.user_name){
        note = (<div>Your mentor {this.context.showNote.mentorName} is waiting</div>)
      }
    }
    return (
      <div>
        <div className="studentsMainPage">
          {note}
          {numberInLine ? (
            <div>You are currently #{numberInLine + 1} in line.</div>
          ) : (
            ""
          )}
          {message.length > 0 ? (
            <div>You have {message.length} open ticket(s).</div>
          ) : (
            <div>You don't have any tickets open.</div>
          )}
          <h2 className="studentListTitle">Waiting List</h2>
          <HelpForm className="getHelpButton" />
          <ul className="studentWaitingQueue">{makeQueue}</ul>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";
import StudentWaitingNameList from "./studentWaitingNameList/studentWatingNameList";

export default class StudentQueue extends Component {
  static contextType = QueueContext;

  componentDidMount() {
    this.context.webSocket();
    this.context.dequeueWait();
  }

  render() {
    const { showNote, queueList } = this.context;
    const { user_name } = this.props.user.user;
    const userTickets = queueList.filter(
      el => el.studentName === this.props.user.user.full_name
    );
    const numberInLine = queueList.indexOf(userTickets[0]);
    let note = "";

    if (showNote) {
      if (showNote.user_name === user_name) {
        note = (
          <div>
            Your mentor {showNote.mentorName} is waiting at{" "}
            {showNote.url}{" "}
          </div>
        );
      }
    }

    return (
      <section>
        <div className="studentsMainPage">
          {note}
          {numberInLine > 0 && (
            <div>You are currently #{numberInLine + 1} in line.</div>
          )}
          {userTickets ? (
            <div>You have {userTickets.length} open ticket(s).</div>
          ) : (
            <div>You don't have any tickets open.</div>
          )}
          <h2 className="studentListTitle">Waiting List</h2>
          <HelpForm className="getHelpButton" />
          <ul className="studentWaitingQueue">
            {queueList.map((listItem, index) => (
              <StudentWaitingNameList
                key={index}
                personInLine={listItem}
                currentUser={user_name}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

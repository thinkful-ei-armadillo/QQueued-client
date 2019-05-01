import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";
import StudentWaitingNameList from "./studentWaitingNameList/studentWatingNameList";
import { Link } from "react-router-dom";

export default class StudentQueue extends Component {
  static contextType = QueueContext;

  componentDidMount() {
    this.context.webSocket();
    this.context.dequeueWait();
  }
  renderPlaceInLine(indexInLine) {
    return <div>You are currently #{indexInLine + 1} in line.</div>;
  }
  renderOpenTickets(numOfTickets) {
    return <div>You have {numOfTickets} open ticket(s).</div>;
  }
  renderChatRoom(room) {
    return (
      <p>
        Your mentor {room.mentorName} is waiting in this
        <span>
          <Link to={room.url}> Room </Link>
        </span>
      </p>
    );
  }
  render() {
    const { showNote, queueList } = this.context;
    const { user_name } = this.props.user.user;
    const userTickets = queueList.filter(
      el => el.studentName === this.props.user.user.full_name
    );
    const numberInLine = queueList.indexOf(userTickets[0]);

    return (
      <section>
        <div className="studentsMainPage">
          {showNote.user_name === user_name && this.renderChatRoom(showNote)}
          {numberInLine > 0 && this.renderPlaceInLine(numberInLine)}
          {userTickets ? (
            this.renderOpenTickets(userTickets.length)
          ) : (
            <div>You don't have any tickets open.</div>
          )}
          <h2 className="studentListTitle">Waiting List</h2>
          <HelpForm className="getHelpButton" />
          <ul className="studentWaitingQueue">
            {queueList.length > 0 ? (
              queueList.map((listItem, index) => (
                <StudentWaitingNameList
                  key={index}
                  personInLine={listItem}
                  currentUser={user_name}
                />
              ))
            ) : (
              <p className="noOneInQueue">No one is in the queue</p>
            )}
          </ul>
        </div>
      </section>
    );
  }
}

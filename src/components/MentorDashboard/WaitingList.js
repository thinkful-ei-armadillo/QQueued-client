import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboard.css";
import "./MentorDashboardAnimations.css";

export default class StudentDescriptionList extends Component {
  static contextType = QueueContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.context.webSocket();
    this.context.update();
  }

  makeStudentList = () => {
    return (
      <div>
          {this.context.queueList.map((i, j) => {
            return (
              <li key={j} className="waitingListLiConatiner">
                <span className="studentName">{i.studentName}</span>{" "}
                <span className="description"> {i.description}</span>
              </li>
            );
          })}
      </div>
    );
  };

  render() {
    return <ul>{this.makeStudentList()}</ul>;
  }
}

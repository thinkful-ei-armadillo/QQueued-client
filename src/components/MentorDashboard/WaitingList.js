import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboard.css";
import "./MentorDashboardAnimations.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.context.queueList.map((i, j) => {
            return (
              <li key={j} className="waitingListLiConatiner">
                <span className="studentName">{i.studentName}</span>{" "}
                <span className="description"> {i.description}</span>
              </li>
            );
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  };

  render() {
    return <ul>{this.makeStudentList()}</ul>;
  }
}

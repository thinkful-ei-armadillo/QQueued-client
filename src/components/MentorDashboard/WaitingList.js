import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import UserContext from '../../context/UserContext';
import "./MentorDashboard.css";
export default class StudentDescriptionList extends Component {
  static contextType = QueueContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      this.context.webSocket();
    
  }

  makeStudentList = () => {
    return (
      this.context.queueList.map((i, j) => {
      return (
        <li key={ j } className="waitingListLiConatiner">
          <span className="studentName">{ i.studentName }</span>{ " " }
          <span className="description"> { i.description }</span>
        </li>
      );
    })
    );
  }

  render() {
    return <ul>{ this.makeStudentList() }</ul>
  }
}

import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import UserContext from '../../context/UserContext';
import "./MentorDashboard.css";
export default class StudentDescriptionList extends Component {
  static contextType = QueueContext;

  constructor(props) {
    super(props);
    this.state = {};
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    if(this._isMounted) {
      this.context.webSocket();
    }
  }

  componentWillUnmount() {
    // this.context.closeWebSocket();
    this._isMounted = false;
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

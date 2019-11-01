import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboard.css";
import "./MentorDashboardAnimations.css";

export default class StudentDescriptionList extends Component {
  static contextType = QueueContext;

  componentDidMount() {
    this.context.webSocket();
    this.context.update();
  }
  makeStudentList = () => {
         return this.context.queueList.map((i, j) => 
            (
              <li key={j} className="studentName">
                <div> Student:  {i.studentName}</div>
                <div> Question:  {i.description}</div>
              </li>
            ));
  };
  render() {
    
    return (

      <React.Fragment>
       <h3>Current Wait List</h3>
       <ul>{this.makeStudentList()}</ul>
      </React.Fragment>
      )
    }
}

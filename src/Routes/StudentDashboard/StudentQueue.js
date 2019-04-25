import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";

export default class StudentQueue extends Component {
  static contextType = QueueContext;

  makeQueue(list) {
    console.log(this.context.queueList);
    if (list) {
      return list.map(student => <li>{(student = { student })}</li>);
    }
  }

  render() {
    return (
      <div>
        <h2>Waiting List</h2>
        <ul>{this.makeQueue(this.context.queueList)}</ul>
      </div>
    );
  }
}

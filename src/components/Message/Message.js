import React, { Component } from "react";
import slackApiService from "../../services/slack-api-service";
import QueueContext from "../../context/QueueContext";

// DJ4F8DUMB
//user_id : for me is UJ3CMD8UV
export default class Message extends Component {
  static contextType = QueueContext;

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      slack_id: ""
    };
  }
  onChange = message => {
    this.setState({ text: message });
  };

  onChangeDropDown = val => {
    this.setState({slack_id: val})
  }
  onSubmit = e => {
    e.preventDefault();
    slackApiService
      .openDmAndMessage(this.state.slack_id, this.state.text)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.message);
        }
        return;
      })
      .catch(err => console.log(err.message));
  };

  render() {
    let dropDown = ""; // queueList
    if (this.context.queueList.length > 0) {
      dropDown = this.context.queueList.map(i => {
        return (
            <option key={i.id} value={i.slack_user_id}>{i.studentName}</option>
        );
      });
    }
    return (
      <div>
        <select name="student-dropdown" onChange={e => this.onChangeDropDown(e.target.value)}>
        <option key='999' value=''>--Select a student---</option>
        {dropDown}
        </select>
        <form onSubmit={e => this.onSubmit(e)} className="send-messag">
          <textarea
            name="message"
            id=""
            cols="50"
            rows="10"
            value={this.state.text}
            onChange={e => this.onChange(e.target.value)}
          />
          <button type="submit">Send!</button>
        </form>
      </div>
    );
  }
}

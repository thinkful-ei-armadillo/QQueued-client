import React, { Component } from "react";
import slackApiService from "../../services/slack-api-service";
import QueueContext from "../../context/QueueContext";
import Button from "../Button/Button";
import "./Message.css";

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
    this.setState({ text: message, message: '' });
  };

  onChangeDropDown = val => {
    this.setState({ slack_id: val });
  };

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
      this.setState({text: '', message: `Message sent!`})
  };
  
  renderDropDown = queueList => {
    const studentNames = [];
    const checkForDupHash = {};
    for (let i = 0; i < queueList.length; i++) {
      if (!checkForDupHash[queueList[i].studentName] && queueList[i].slack_user_id) {
        checkForDupHash[queueList[i].studentName] = true;
        studentNames.push(queueList[i]);
      }
    }
    return studentNames.map(user => (
        <option key={user.id} value={user.slack_user_id}>
          {user.studentName}
        </option>
      )
    );
  }

  render() {
    const {queueList} = this.context;
 
    return (
      <section className="messageContainer row">
        <div className="col-6">
          <form onSubmit={e => this.onSubmit(e)} className="send-message col-6">
            <select
              name="student-dropdown"
              className="studentDropdown"
              onChange={e => this.onChangeDropDown(e.target.value)}
              required
            >
              <option value="">
                --Select a student--
              </option>
              {this.renderDropDown(queueList)}
            </select>
            {this.state.message && <p>{this.state.message}</p>}    
            <textarea
              name="message"
              id="sendMessage"
              rows="10"
              className="message-textBox"
              value={this.state.text}
              onChange={e => this.onChange(e.target.value)}
            />
            <Button type="submit" className="slack-message-button">Send!</Button>
          </form>
        </div>
      </section>
    );
  }
}

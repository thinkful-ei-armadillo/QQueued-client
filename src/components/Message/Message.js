import React, { Component } from "react";

// DJ4F8DUMB
//user_id : for me is UJ3CMD8UV
export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }
  // maybe in context need to get the user you want to talk to
  // make a call to im.open to on a DM bewteen bot and user
  // then make post call to https://slack.com/api/chat.postMessage
  onChange = message => {
    this.setState({ text: message });
  };
  onSubmit = e => {
    e.preventDefault();

    console.log("hello");
  };

  render() {
    return (
      <div>
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

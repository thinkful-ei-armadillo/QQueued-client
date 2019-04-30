import React, { Component } from "react";
import openSocket from "socket.io-client";
import "./Chat.css";
import Button from "../Button/Button";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      users: "",
      messages: []
    };
    this.socket = openSocket(
      /* config.API_ENDPOINT ||  */ "http://localhost:8000"
    );
  }

  componentDidMount() {
    this.socket.emit("change-username", {
      userName: this.props.user.user.user_name
    });
    this.socket.on("entered", data => {
      this.setState({ users: data });
    });
    this.socket.on("message", data => {
      this.state.messages.push(data);
      this.setState({ messages: this.state.messages });
    });
  }
  componentWillUnmount() {
    this.socket.close();
  }

  handleChange = e => {
    this.setState({ input: e });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.socket.emit("message", this.state.input);
    console.log(this.state.input);
  };
  render() {
    let thread;
    if (this.state.messages.length > 0) {
      thread = this.state.messages.map((i, j) => {
        return <p key={j}>{i}</p>;
      });
    }
    return (
      <div className="chatRoomInput">
        {this.state.users && <p>{this.state.users} has entered.</p>}
        {thread}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="input-field"
            id=""
            onChange={e => this.handleChange(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    );
  }
}

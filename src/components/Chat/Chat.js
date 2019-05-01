import React, { Component } from "react";
import openSocket from "socket.io-client";
import "./Chat.css";
import Button from "../Button/Button";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      users: [],
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
      this.setState({ users: [...this.state.users, data] });
    });
    this.socket.on("message", data => {
      this.setState({ messages: [...this.state.messages, data] });
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
    this.socket.emit("message", {
      user: this.state.users[0],
      text: this.state.input
    });
    e.target.reset();
  };
  render() {
    let thread;
    console.log(this.state.users)
    if (this.state.messages.length > 0) {
      thread = this.state.messages.map((i, j) => {
        return (
          <div key={i} className="chatMessage">
            <span title={i.user} className="currentUser">
              {i.user.charAt(0).toUpperCase()}
            </span>
            <p className="currentMessage" key={j}>
              {i.text}
            </p>
          </div>
        );
      });
    }
    let activeUsers;
    if (this.state.users.length > 0) {
      activeUsers = this.state.users.map((i, j) => {
        return (
          <p className="userHasJoined" key={j}>
            {i} has joined
          </p>
        );
      });
    }
    return (
      <div className="chatRoomContainer">
        <section className="chatRoomInput">
          {activeUsers}
          {thread}
          <form className="chatRoomForm" onSubmit={e => this.handleSubmit(e)}>
            <input
              className="sendMessage"
              type="text"
              name="input-field"
              id=""
              placeholder="send a message"
              onChange={e => this.handleChange(e.target.value)}
            />
            <Button type="submit">
              Send
            </Button>
          </form>
        </section>
      </div>
    );
  }
}

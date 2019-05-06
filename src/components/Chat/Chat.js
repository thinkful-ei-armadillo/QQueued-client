import React, { Component } from "react";
import openSocket from "socket.io-client";
import "./Chat.css";
import Button from "../Button/Button";
import QueueContext from "../../context/QueueContext";
import apiSerivce from "../../services/api-service";

export default class Chat extends Component {
  static contextType = QueueContext;
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      users: [],
      messages: [],
      to: [],
      studentInput: "",
      student: ""
    };
    this.socket = openSocket(
      /* config.API_ENDPOINT ||  */ "http://localhost:8000"
    );
    this.rooms = [];
    this.recevier = "";
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  async componentDidMount() {
    if(this.focusInput){
      this.focusInput.focus()
    }
    const { currentlyBeingHelped } = await apiSerivce.getQueue();
    const filtedList = currentlyBeingHelped.filter(
      i =>
        i.studentName === this.props.user.user.full_name ||
        i.mentorName === this.props.user.user.full_name
    );

    this.socket.emit("join-room", {
      userName: this.props.user.user.full_name,
      list: filtedList[filtedList.length - 1]
    });
    this.socket.on("entered", data => {
      this.rooms.push(data);
      this.setState({ users: [...this.state.users, data.userName] });
    });

    this.socket.on("message", data => {
      this.setState({
        messages: [...this.state.messages, data],
        student: "",
        studentInput: ""
      });
    });

    this.socket.on("isTyping", data => {
      if (this.state.users[0] !== data.to.studentName) {
        this.setState({
          student: data.to.studentName,
          studentInput: data.type
        });
      }
    });
    this.scrollToBottom();
  }
  componentWillUnmount() {
    const helpedArray = this.context.currentlyBeingHelped;
    this.socket.emit("left", {
      user: this.state.users[0],
      room: this.rooms,
      to: helpedArray[helpedArray.length - 1]
    });
    this.socket.close();
  }

  handleChange = e => {
    const helpedArray = this.context.currentlyBeingHelped.filter(
      i =>
        i.studentName === this.state.users[0] ||
        i.mentorName === this.state.users[0]
    );
    this.socket.emit("isTyping", {
      type: e,
      to: helpedArray[helpedArray.length - 1],
      user: this.state.users[0]
    });
    this.setState({ input: e });
  };

  handleSubmit = e => {
    e.preventDefault();
    const helpedArray = this.context.currentlyBeingHelped.filter(
      i =>
        i.studentName === this.state.users[0] ||
        i.mentorName === this.state.users[0]
    );
    this.socket.emit("message", {
      user: this.state.users[0],
      text: this.state.input,
      time: new Date().toLocaleTimeString(),
      room: this.rooms,
      to: helpedArray[helpedArray.length - 1]
    });
    this.setState({ student: "", studentInput: "" });
    e.target.reset();
  };

  render() {
    let thread;
    if (this.state.messages.length > 0) {
      thread = this.state.messages.map((i, j) => {
        if (this.props.user.user.full_name !== i.user) {
          return (
            <div className="foreignChatMessage" key={j}>
              <span title={i.user} className="foreignUser">
                {i.user.charAt(0).toUpperCase()}
              </span>
              <p className="foreignMessage">{i.text}</p>
              <p className="time">{i.time}</p>
            </div>
          );
        }

        return (
          <div key={j} className="chatMessage">
            <span title={i.user} className="currentUser">
              {i.user.charAt(0).toUpperCase()}
            </span>
            <p className="currentMessage">{i.text}</p>
            <p className="time">{i.time}</p>
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
          <section className="messages">
            {activeUsers}
            {thread}
            {this.state.studentInput && (
              <div>
                <span>{this.state.student} preview: </span>
               <p className="foreignMessage">{this.state.studentInput}</p> 
              </div>
            )}
            <div
              style={{ float: "left", clear: "both" }}
              ref={el => {
                this.messagesEnd = el;
              }}
            />
          </section>
          <form className="chatRoomForm" onSubmit={e => this.handleSubmit(e)}>
            <input
              ref={(input) => {this.focusInput = input}}
              className="sendMessage"
              type="text"
              name="input-field"
              id=""
              placeholder="send a message"
              onChange={e => this.handleChange(e.target.value)}
              autoComplete="off"
            />
            <Button type="submit">Send</Button>
          </form>
        </section>
      </div>
    );
  }
}

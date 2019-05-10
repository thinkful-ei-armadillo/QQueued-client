import React, { Component } from "react";
import Message from "../../components/Message/Message";
import { QueueProvider } from "../../context/QueueContext";

export default class MessageRoute extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <QueueProvider>
        <Message />
      </QueueProvider>
    );
  }
}

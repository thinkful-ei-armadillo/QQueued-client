import React, { Component } from "react";
import Message from "../../components/Message/Message";
import { QueueProvider } from "../../context/QueueContext";

export default class MessageRoute extends Component {
  render() {
    return (
      <div>
        <QueueProvider>
          <Message />
        </QueueProvider>
      </div>
    );
  }
}

import React, { Component, createContext } from "react";
import apiService from "../services/api-service";
import openSocket from "socket.io-client";


const QueueContext = createContext({
  queueList: [],
  currentlyBeingHelped: [],
  hasBeenHelpedList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  updateQueue: () => {},
  helpStudent: () => {},
  addStudent: () => {},
  webSocket: () => {},
  closeWebSocket: () => {},
  studentHelped: () => {},
  dequeueWait: () => {},
  
});

export default QueueContext;

export class QueueProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      queueList: [],
      currentlyBeingHelped: [],
      hasBeenHelpedList: [],
      error: null
    };
    this.state = state;
    this.socket = openSocket(
      /* config.API_ENDPOINT ||  */ "http://localhost:8000"
    )
  }

  componentDidMount() {
    apiService
      .getQueue()
      .then(async queue => {
        const {
          queueList,
          currentlyBeingHelped,
          hasBeenHelpedList
        } = await queue;

        await this.updateQueue(
          queueList,
          currentlyBeingHelped,
          hasBeenHelpedList
        );
      });
  }

  componentWillUnmount() {
    this.socket.close()
  }

  updateQueue = (queueList, currentlyBeingHelped, hasBeenHelpedList) => {
    if (!!queueList) {
      this.setState({ queueList });
    }
    if (!!currentlyBeingHelped) {
      this.setState({ currentlyBeingHelped });
    }
    if (!!hasBeenHelpedList) {
      this.setState({ hasBeenHelpedList });
    }
  };

  helpStudent = mentorName => {
    apiService.moveStudent().then(() => {
      const { queueList, currentlyBeingHelped } = this.state;
      let student = queueList.shift();
      student.mentorName = mentorName;
      currentlyBeingHelped.push(student);

      this.setState({
        queueList,
        currentlyBeingHelped
      });
    });
  };

  addStudent = description => {
    apiService.addStudent(description);
  };

  studentHelped = id => {
    apiService.removeStudent(id).then(res => {
      const { currentlyBeingHelped, hasBeenHelpedList } = this.state;

      const student = currentlyBeingHelped.filter(s => s.id === id);
      const newList = currentlyBeingHelped.filter(s => s.id !== id);

      this.setState({
        hasBeenHelpedList: [...hasBeenHelpedList, ...student],
        currentlyBeingHelped: newList
      });
    });
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  webSocket = () => {
      this.socket.on("new-ticket", data => {
        this.state.queueList.push(data);
        this.setState({
          queueList: this.state.queueList
        });
      });
   
  };

  closeWebSocket = () => {
    this.socket.close();
  };

  dequeueWait = () => {
    this.socket.on("dequeue", data => {
      if (data === 1) {
        this.state.queueList.shift();
        this.setState({ queueList: this.state.queueList });
      }
    });
  };

  render() {
    const value = {
      queueList: this.state.queueList,
      currentlyBeingHelped: this.state.currentlyBeingHelped,
      hasBeenHelpedList: this.state.hasBeenHelpedList,
      error: this.state.error,
      updateQueue: this.updateUsers,
      setError: this.setError,
      clearError: this.clearError,
      helpStudent: this.helpStudent,
      addStudent: this.addStudent,
      webSocket: this.webSocket,
      closeWebSocket: this.closeWebSocket,
      studentHelped: this.studentHelped,
      dequeueWait: this.dequeueWait
    };

    return (
      <QueueContext.Provider value={value}>
        {this.props.children}
      </QueueContext.Provider>
    );
  }
}

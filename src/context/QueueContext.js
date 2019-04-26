import React, { Component, createContext } from 'react';
import apiService from '../services/api-service';
import { connect, disconnect } from '../websockets/test';

const QueueContext = createContext({
  queueList: [],
  currentlyBeingHelped: [],
  hasBeenHelped: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  updateQueue: () => { },
  helpStudent: () => { },
  addStudent: () => { },
  webSocket: () => { },
  closeWebSocket: () => { },
  studentHelped: () => { }
});

export default QueueContext;

export class QueueProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      queueList: [],
      currentlyBeingHelped: [],
      hasBeenHelped: [],
      error: null
    };
    this.state = state;
  }

  componentDidMount() {
    apiService
      .getQueue()
      .then(queue => {
        console.log(queue)
        const { queueList, currentlyBeingHelped } = queue;
        this.updateQueue(queueList, currentlyBeingHelped)
      });
  }

  componentWillUnmount() {
    this.closeWebSocket()
  }

  updateQueue = (queueList=[], currentlyBeingHelped=[]) => {
    if (queueList.length !== 0) {
      this.setState({ queueList });
    }
    if (currentlyBeingHelped.length !== 0) {
      this.setState({ currentlyBeingHelped });
    }
  }

  helpStudent = () => {
    apiService
      .moveStudent()
      .then(() => {
        const { queueList, currentlyBeingHelped } = this.state;
        currentlyBeingHelped.push(queueList.shift());
        this.setState({
          queueList,
          currentlyBeingHelped
        });
      });
  }

  addStudent = (description) => {
    apiService
      .addStudent(description)
      .then(user => {
        this.setState({queueList: [...this.state.queueList, user]})
      })
  }

  studentHelped = (id) => {
    apiService
      .removeStudent(id)
      .then(() => {
        const { currentlyBeingHelped, hasBeenHelped } = this.state;
        hasBeenHelped.push(currentlyBeingHelped.shift());
        this.setState({
          hasBeenHelped,
          currentlyBeingHelped
        });
      })
  }

  setError = error => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  webSocket = () => {
    connect(res => {
      const { queueList, currentlyBeingHelped } = res;
      this.setState({
        queueList,
        currentlyBeingHelped
      })
    })
  }

  closeWebSocket = () => {
    disconnect()
  }

  render() {
    const value = {
      queueList: this.state.queueList,
      currentlyBeingHelped: this.state.currentlyBeingHelped,
      hasBeenHelped: this.state.hasBeenHelped,
      error: this.state.error,
      updateQueue: this.updateUsers,
      setError: this.setError,
      clearError: this.clearError,
      helpStudent: this.helpStudent,
      addStudent: this.addStudent,
      webSocket: this.webSocket,
      closeWebSocket: this.closeWebSocket,
      studentHelped: this.studentHelped
    };

    return (
      <QueueContext.Provider value={value}>
        {this.props.children}
      </QueueContext.Provider>
    )
  }

}
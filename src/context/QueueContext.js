import React, { Component, createContext } from 'react';
import apiService from '../services/api-service';
import { disconnect, newTicket } from '../websockets/test';

const QueueContext = createContext({
  queueList: [],
  currentlyBeingHelped: [],
  hasBeenHelpedList: [],
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
      hasBeenHelpedList: [],
      error: null
    };
    this.state = state;
  }

  componentDidMount() {
    apiService
      .getQueue()
      .then(queue => {
        console.log(queue)

        const {
          queueList,
          currentlyBeingHelped,
          hasBeenHelpedList
        } = queue;
        
        this.updateQueue(
          queueList,
          currentlyBeingHelped,
          hasBeenHelpedList
        )
      });
  }

  componentWillUnmount() {
    this.closeWebSocket()
  }

  updateQueue = (queueList, currentlyBeingHelped, hasBeenHelpedList) => {
    if (!!queueList) {
      this.setState({ queueList });
    }
    if (!!currentlyBeingHelped) {
      this.setState({ currentlyBeingHelped });
    }
    if (!!hasBeenHelpedList) {
      this.setState({ hasBeenHelpedList })
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
  }

  studentHelped = (id) => {
    apiService
      .removeStudent(id)
      .then(() => {
        const { currentlyBeingHelped, hasBeenHelpedList } = this.state;
        hasBeenHelpedList.push(currentlyBeingHelped.shift());
        this.setState({
          hasBeenHelpedList,
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
    newTicket(res => {
      this.state.queueList.push(res)
      this.setState({
        queueList: this.state.queueList
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
      hasBeenHelpedList: this.state.hasBeenHelpedList,
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
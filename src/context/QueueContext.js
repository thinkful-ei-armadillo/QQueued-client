import React, { Component, createContext } from 'react';
import apiService from '../services/api-service';

const QueueContext = createContext({
  queueList: [],
  currentlyBeingHelped: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  updateQueue: () => { },
  helpStudent: () => { },
  addStudent: () => { }
});

export default QueueContext;

export class QueueProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      queueList: [],
      currentlyBeingHelped: [],
      error: null
    }

    this.state = state;
  }

  componentDidMount() {
    apiService
      .getQueue()
      .then(queue => {
        const { queueList, currentlyBeingHelped } = queue;
        this.updateQueue(queueList, currentlyBeingHelped)
        console.log(queue)
      });
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
  }
  

  setError = error => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const value = {
      queueList: this.state.queueList,
      currentlyBeingHelped: this.state.currentlyBeingHelped,
      error: this.state.error,
      updateQueue: this.updateUsers,
      setError: this.setError,
      clearError: this.clearError,
      helpStudent: this.helpStudent,
      addStudent: this.addStudent
    }

    return (
      <QueueContext.Provider value={value}>
        {this.props.children}
      </QueueContext.Provider>
    )
  }

}
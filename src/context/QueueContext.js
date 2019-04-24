import React, { Component, createContext } from 'react';
import apiService from '../services/api-service';

const QueueContext = createContext({
  queueList: [],
  currentlyBeingHelped: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  updateQueue: () => { }
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
        console.log(this.state.queueList)
      });
  }

  updateQueue = (queueList=[], currentlyBeingHelped=[]) => {
    if (queueList.length !== 0) {
      this.setState({ queueList });
    }
    if (currentlyBeingHelped.lenth !== 0) {
      this.setState({ currentlyBeingHelped });
    }
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
      clearError: this.clearError
    }

    return (
      <QueueContext.Provider value={value}>
        {this.props.children}
      </QueueContext.Provider>
    )
  }

}
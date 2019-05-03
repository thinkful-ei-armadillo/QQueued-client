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
  tellUser: () => {},
  showNote: () => {},
  removeStudentFromQueue: () => { },
  updateTicket: () => { }
});

export default QueueContext;

export class QueueProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      queueList: [],
      currentlyBeingHelped: [],
      hasBeenHelpedList: [],
      error: null,
      note: ''
    };
    this.state = state;
    this.socket = openSocket(
      /* config.API_ENDPOINT ||  */ "http://localhost:8000"
    )
  }

  componentDidMount() {
    this.socket.on('notifiy', data => {
      this.setState({note: data})
    })
    this.socket.on('delete-ticket', data => {
      this.setState({queueList: data})
    })
    
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
        console.log(await this.state.queueList)
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

  helpStudent = async (mentorName, history, queue_id) => {
    apiService.moveStudent().then(() => {
      const { queueList, currentlyBeingHelped } = this.state;
      let student = queueList.shift();
      student.mentorName = mentorName;
      currentlyBeingHelped.push(student);

      this.setState({
        queueList,
        currentlyBeingHelped
      }, () => history.push({
        pathname: `/mentor/${mentorName}`,
        state: { queue_id }
      }));
    });
  };

  updateTicket = (description, id) => {
    apiService
      .updateDescription(description, id)
      .then(res => {
        const { queueList } = this.state;
        const idx = queueList.findIndex(item => item.id === res[0].id);
        queueList[idx].description = res[0].description;
        this.setState({ queueList });
      })
  }

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
        this.setState({
          queueList: [...this.state.queueList, data]
      });
    });
  };

  closeWebSocket = () => {
    this.socket.close();
  };

  dequeueWait = () => {
    this.socket.on("dequeue", data => {
      if (data === 1) {
        const { queueList } = this.state;
        queueList.shift();
        this.setState({ queueList });
      }
    });
  };

  removeStudentFromQueue = id => {
    const removedStudent = this.state.queueList.filter(queue => queue.id !== id);
    this.socket.emit('delete-ticket', removedStudent)
  };

  tellUser = (data) => {
    this.socket.emit('notifiy', data)
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
      studentHelped: this.studentHelped,
      dequeueWait: this.dequeueWait,
      tellUser: this.tellUser,
      showNote: this.state.note,
      removeStudentFromQueue: this.removeStudentFromQueue,
      updateTicket: this.updateTicket
    };

    return (
      <QueueContext.Provider value={value}>
        {this.props.children}
      </QueueContext.Provider>
    );
  }
}

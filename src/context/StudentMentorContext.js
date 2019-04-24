import React, { Component, createContext } from 'react';
import apiService from '../services/api-service';

const StudentMentorContext = createContext({
  users: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  updateUsers: () => { }
});

export default StudentMentorContext;

export class StudentMentorProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      users: [],
      error: null
    }

    this.state = state;
  }

  componentDidMount() {
    apiService
      .getUsers()
      .then(users => this.updateUsers(users));
  }

  updateUsers = users => {
    this.setState({ users });
  }

  setError = error => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const value = {
      users: this.state.users,
      error: this.state.error,
      updateUsers: this.updateUsers,
      setError: this.setError,
      clearError: this.clearError
    }

    return (
      <StudentMentorContext.Provider value={value}>
        {this.props.children}
      </StudentMentorContext.Provider>
    )
  }

}
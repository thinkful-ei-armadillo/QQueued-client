import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const StudentDataContext = createContext({
  studentData: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  getAllStudentData: () => { },
  updateStudentData: () => { }
});

export default StudentDataContext;

export class StudentDataProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      studentData: [],
      error: null
    }
    this.state = state;
  }

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  updateStudentData = (studentData) => {
    this.setState({ studentData });
  }

  componentDidMount() {
    apiService
      .getAllData()
      .then(async data => await this.updateStudentData(data))
  }

  render() {
    const {
      studentData,
      error,
      setError,
      clearError,
      getAllStudentData
    } = this.state;

    const value = {
      studentData,
      error,
      setError,
      clearError,
      getAllStudentData
    }

    return (
      <StudentDataProvider value={value}>
        {this.props.children}
      </StudentDataProvider>
    )
  }
}
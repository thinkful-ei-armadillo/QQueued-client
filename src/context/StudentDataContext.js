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

  updateStudentData = (data) => {
    const studentData = this._createStudentDataItems(data)
    this.setState({ studentData });
  };

  componentDidMount() {
    apiService
      .getAllData()
      .then(async data => await this.updateStudentData(data))
  };

  _createStudentDataItems = (studentData) => {
    let studentNames = [];
    let studentDataList = [];
    let studentItem = [];

    // create array with only one student name per student
    studentData.forEach(s => {
      if (studentNames.indexOf(s.studentName) === -1) {
        studentNames.push(s.studentName);
      }
    });

    // create array of data pertaining to each student
    studentNames.forEach(name => {
      studentDataList.push(
        studentData.filter(student => student.studentName === name)
      );
    });

    // compile all data related to a single student in an object
    // while removing unnecessary duplicates
    for (let i = 0; i < studentDataList.length; i++) {
      studentItem.push({
        studentName: studentDataList[i][0]["studentName"],
        mentors: studentDataList[i]
          .map(s => s["mentorName"])
          .filter((e, i, s) => i === s.indexOf(e)),
        questions: studentDataList[i].map(q => q["description"])
      });
    }
    return studentItem;
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
    };

    return (
      <StudentDataContext.Provider value={value}>
        {this.props.children}
      </StudentDataContext.Provider>
    )
  }
}
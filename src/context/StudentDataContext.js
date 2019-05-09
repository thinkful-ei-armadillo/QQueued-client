import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const StudentDataContext = createContext({
  studentData: [],
  studentHistory: [],
  notes: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  updateStudentData: () => { }
});

export default StudentDataContext;

export class StudentDataProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      studentData: [],
      studentHistory: [],
      notes: [],
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

  _createStudentHistory = (data) => {
    return data.map(d => {
      if (d["mentor_notes"] === null) {
        d["mentor_notes"] = "mentor left no notes";
      }
      if (d["student_notes"] === null) {
        d["student_notes"] = "you made no notes";
      }
      return d;
    });
    
  }

  async componentDidMount() {
    try {
      await apiService.getAllData().then(data => {
        const studentData = this._createStudentDataItems(data);
        const studentHistory = this._createStudentHistory(data);
        this.setState({ studentData, studentHistory });
      });
    }
    catch (error){
      console.log({ error });
    }
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
        questions: studentDataList[i].map(q => q["description"]),
        mentorNotes: studentDataList[i]
          .map(mn => ({ [mn["mentorName"]]: mn["mentor_notes"] }))
          .filter(n => {
            let keys = Object.keys(n); 
            return n[keys] !== null
          }),     
        studentNotes: studentDataList[i]
          .map(sn => sn["student_notes"])
          .filter(n => n !== null)
      });
    }
    return studentItem;
  }

  render() {
    const value = {
      studentData: this.state.studentData,
      studentHistory: this.state.studentHistory,
      notes: this.state.notes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError
    };

    return (
      <StudentDataContext.Provider value={value}>
        {this.props.children}
      </StudentDataContext.Provider>
    )
  }
}
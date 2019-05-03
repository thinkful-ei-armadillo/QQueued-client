import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const StudentDataContext = createContext({
  studentData: [],
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

  createStudentData = (data) => {
    return this._createStudentDataItems(data)
  };

  createNotes = (note) => {
    const notes = this._createNoteItems(note);
    return notes;
  }

  async componentDidMount() {
    try {
  
      const studentData = await apiService.getAllData().then(data => this.createStudentData(data));
      const notes = await apiService.getNotes().then(data => this.createNotes(data));
      await this.setState({ studentData, notes });

    }
    catch (error){
      console.log({ error });
    }
  };

  // sort data before updating state
  _createNoteItems = (note) => {
    let studentNames = [];
    let noteList = [];
    let noteItem = [];

    note.forEach(n => {
      if (studentNames.indexOf(n.studentName) === -1) {
        studentNames.push(n.studentName);
      }
    });

    studentNames.forEach(name => noteList.push(note.filter(n => n.studentName === name)));

    for (let i = 0; i < noteList.length; i++) {
      noteItem.push({
        studentName: noteList[i][0].studentName,
        notes: noteList[i].map(n => n['note'])
        .filter(n => n !== null)
      })
    }
    return noteItem;
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

    const value = {
      studentData: this.state.studentData,
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
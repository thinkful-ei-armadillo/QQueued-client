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

  updateStudentData = (data) => {
    return this._createStudentDataItems(data)
  };

  updateNotes = (note) => {
    const notes = this._createNoteItems(note);
    console.log(notes);
    return notes;
  }

  async componentDidMount() {
    try {
      const studentData = await apiService.getAllData().then(async data => await this.updateStudentData(data));
      const notes = await apiService.getNotes().then(async data => await this.updateNotes(data));

      this.setState({ studentData });
    }
    catch {
      console.log({error: 'error fetching initial data'})
    }
  };

  _createNoteItems = (note) => {
    let studentNames = [];
    let noteList = [];
 
    note.forEach(s => {
      if (studentNames.indexOf(s.studentName) === -1) {
        studentNames.push(s.studentName);
      }
    });

    studentNames.forEach(name => {
      noteList.push(
        note.filter(student => student.studentName === name)
      );
    });

    
    return noteList;

/* 0: {user_name: "student2", note: null}
1: {user_name: "student3", note: null}
2: {user_name: "student4", note: "test"}
3: {user_name: "matth3wn", note: "test note!"}
4: {user_name: "student2", note: null} */
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
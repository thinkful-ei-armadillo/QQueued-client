import React, { Component } from 'react';
import StudentDataContext from '../../context/StudentDataContext';
export default class StudentDataList extends Component {
  
  static contextType = StudentDataContext;

  createStudentListItem = () => {
    const { studentData } = this.context;

    let studentItems = [];
    let studentDataList = [];

    // remove duplicates
    studentData.forEach(s => {
      if (studentItems.indexOf(s.user_name) === -1) {
        studentItems.push(s.user_name);
      }
    });

    // create array of data pertaining to each student
    studentItems.forEach(name => {
      studentDataList.push(studentData.filter(student => student.user_name === name))
    });
    
    return (
      <>
        {studentDataList.map((s, i) => (
          <section key={i}>
            <h3>{s[0].user_name}</h3>
            <ul>
              Helped By:
              {s.map((s, j) => (
                <li key={j}>{ s.helped_by }</li>
              )) }
            </ul>
            <ul>
              Questions:
              {s.map((s, k) => (
                <li key={k}>{ s.question }</li>
              ))}
            </ul>
          </section>
        ))}
      </>
    );
  };

  render() {
  return (
    <>
      { this.createStudentListItem() }
    </>
    )
  }
}
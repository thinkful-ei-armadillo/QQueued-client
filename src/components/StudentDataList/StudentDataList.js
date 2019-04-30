import React, { Component } from 'react';
import StudentDataContext from '../../context/StudentDataContext';
import './StudentDataList.css';

export default class StudentDataList extends Component {
  
  static contextType = StudentDataContext;

  createStudentListItem = () => {
    const { studentData } = this.context;

    let studentNames = [];
    let studentDataList = [];
    let studentItem = []

    // create array with only one student name per student
    studentData.forEach(s => {
      if (studentNames.indexOf(s.studentName) === -1) {
        studentNames.push(s.studentName);
      }
    });

    // create array of data pertaining to each student
    studentNames.forEach(name => {
      studentDataList.push(studentData.filter(student => student.studentName === name))
    });

    // compile all data related to a single student in an object
    // while removing unnecessary duplicates
    for (let i = 0; i < studentDataList.length; i++) {
      studentItem.push(
        {
          studentName: studentDataList[i][0]['studentName'],
          mentors: studentDataList[i]
            .map(s => s['mentorName'])
            .filter((e, i, s) => i === s.indexOf(e)),  
          questions: studentDataList[i]
            .map(q => q['description'])   
        }     
      ) 
    }

    return (
      <>
        {studentItem.map((s, i) => (
          <section className='data-list-section' key={i}>
            <h3>{s.studentName}</h3>
            <h4>Helped By</h4>
            <ul className='data-list'>
              {s.mentors.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
            <h4>Questions</h4>
            <ul className='data-list'>
              {s.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>
        ))}
      </>
    );
  };

  render() {
  return (
    <section className="display-data-section">
      { this.createStudentListItem() }
    </section>
    )
  }
}
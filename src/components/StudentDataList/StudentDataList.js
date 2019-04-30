import React, { Component } from "react";
import StudentDataContext from "../../context/StudentDataContext";
export default class StudentDataList extends Component {
  static contextType = StudentDataContext;

  createStudentListItem = () => {
    const { studentData } = this.context;

    let studentItems = [];
    let studentDataList = [];

    // remove duplicates
    studentData.forEach(s => {
      if (studentItems.indexOf(s.studentName) === -1) {
        studentItems.push(s.studentName);
      }
    });

    // create array of data pertaining to each student
    studentItems.forEach(name => {
      studentDataList.push(
        studentData.filter(student => student.studentName === name)
      );
    });

    return (
      <>
        {studentDataList.map((s, i) => (
          <section key={i}>
            <h3>{s[0].studentName}</h3>
            <ul>
              Helped By:
              {s.map((s, j) => (
                <li key={j}>{s.mentorName}</li>
              ))}
            </ul>
            <ul>
              Questions:
              {s.map((s, k) => (
                <li key={k}>{s.description}</li>
              ))}
            </ul>
          </section>
        ))}
      </>
    );
  };

  render() {
    return <>{this.createStudentListItem()}</>;
  }
}

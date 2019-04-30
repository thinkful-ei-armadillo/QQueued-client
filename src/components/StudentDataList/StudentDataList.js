import React, { Component } from 'react';
import StudentDataContext from '../../context/StudentDataContext';
export default class StudentDataList extends Component {
  
  static contextType = StudentDataContext;

  createStudentListItem = () => {
    const { studentData } = this.context;
    let studentItem = [];
    const userNames = studentData.map(s => s.user_name);
    const filteredNames = userNames.forEach((name, i) => {
      studentItem.push(studentData.filter(student => student.user_name === name))
      if (userNames.indexOf(!studentItem[i][0].user_name, i)) {
        console.log(studentItem[i])
      }

    });
    console.log({filteredNames})
    console.log({userNames})
    console.log({studentItem})
  };

  createDataList = () => {
    return (
      <StudentDataContext.Consumer>
        { value => {
          const { studentData } = value;
          return studentData.map((s, i) => {
            return (
              <ul key={ i }>
                <li>{ s.user_name }</li>
                <li>{ s.question }</li>
              </ul>
            )

          });
        } }
      </StudentDataContext.Consumer>
    )
  }

  render() {
  return (
    <>
      { this.createStudentListItem() }
      { this.createDataList() }
    </>
    )
  }
}
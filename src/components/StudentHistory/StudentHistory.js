import React, { Component } from "react";
import StudentDataContext from "../../context/StudentDataContext";

export default class StudentHistory extends Component {
  static contextType = StudentDataContext;

  createHistoryTab() {
    const { studentData } = this.context;
    console.log(this.context);
    return (
      <>
        <p>hello</p>
        {studentData.map((s, i) => {
          console.log(s.studentName);
          console.log(this.props.currentUser);
          if (s.studentName === this.props.currentUser) {
            return (
              <section className="studentHistory" key={i}>
                <h4>You've been helped by :</h4>
                <ul className="data-list">
                  {s.mentors.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
                <h4>For These Issues :</h4>
                <ul className="data-list">
                  {s.questions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </section>
            );
          }
          return null;
        })}
      </>
    );
  }

  render() {
    return (
      <section className="studentHistory">{this.createHistoryTab()}</section>
    );
  }
}

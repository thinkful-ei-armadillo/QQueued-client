import React, { Component } from "react";
import StudentDataContext from "../../context/StudentDataContext";
import { Link } from "react-router-dom";
import "./StudentDataList.css";
import Graph from "../Graph/Graph";
export default class StudentDataList extends Component {
  static contextType = StudentDataContext;

  createStudentListItem = () => {
    const { studentData } = this.context;
    console.log(this.context);
    return (
      <>
        <Graph data={studentData} />
        {studentData.map((s, i) => (
          <section className="data-list-section" key={i}>
            <h3>
              {<Link to={`/data/${s.studentName}`}>{s.studentName}</Link>}
            </h3>
            <h4>Helped By</h4>
            <ul className="data-list">
              {s.mentors.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
            <h4>Questions</h4>
            <ul className="data-list">
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
        {this.createStudentListItem()}
      </section>
    );
  }
}

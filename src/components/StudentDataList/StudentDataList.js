import React, { Component } from "react";
import StudentDataContext from "../../context/StudentDataContext";
import { Link } from "react-router-dom";
import "./StudentDataList.css";
import Graph from "../Graph/Graph";

export default class StudentDataList extends Component {
  static contextType = StudentDataContext;

  createStudentListItem = studentData => {
    return studentData.map((s, i) => (
      <li className="" key={i}>
        <Link to={`/data/${s.studentName}`} className="data-student-name">
          {s.studentName}
        </Link>
        <p className="data-question">{s.questions[0]}</p>
      </li>
    ))
  };

  render() {
    const {studentData} = this.context;
    return (
      <section className="display-data-section row">
        <Graph data={studentData} />
        <div className="col-6">
          <ul className="studentDataListTitles">
            <li className="data-student-name">Student Name (click name for more info)</li>
            <li className="data-question">Question</li>
          </ul>
          <ul className="dataPageContainer">
            {this.createStudentListItem(studentData)}
          </ul>
        </div>
      </section>
    );
  }
}

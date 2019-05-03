import React, { Component } from "react";
import StudentHistory from "../../components/StudentHistory/StudentHistory";
import UserContext from "../../context/UserContext";

export class StudentHistoryRoute extends Component {
  static contextType = UserContext;
  state = {};
  render() {
    const { full_name } = this.context.user;
    return (
      <section className="row">
        <div className="studentHistory col-12">
          <StudentHistory currentUser={full_name} />
        </div>
      </section>
    );
  }
}

export default StudentHistoryRoute;

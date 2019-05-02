import React, { Component } from "react";
import StudentDataContext from "../../context/StudentDataContext";
import "./StudentHistory.css";

export default class StudentHistory extends Component {
  static contextType = StudentDataContext;
  state = {
    helper: true,
    issues: true
  };

  createHistoryTab() {
    const { studentData } = this.context;
    return (
      <>
        {studentData.map((s, i) => {
          if (s.studentName === this.props.currentUser) {
            return (
              <section className="studentHistory" key={i}>
                <button
                  onClick={() => {
                    if (!this.state.helper) {
                      this.setState({ helper: true });
                    } else {
                      this.setState({ helper: false });
                    }
                  }}
                  className={this.state.helper ? "buttonDropDown" : "buttonUp"}
                >
                  You've been helped by{" "}
                  <span>
                    <img
                      src="https://user-images.githubusercontent.com/45447942/57102722-02ab6200-6cd9-11e9-888a-9e206d404505.png"
                      alt="arrow"
                    />
                  </span>
                </button>
                <ul
                  className={
                    this.state.helper ? "mentorHistory" : "noMentorHistory"
                  }
                >
                  {s.mentors.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (!this.state.issues) {
                      this.setState({ issues: true });
                    } else {
                      this.setState({ issues: false });
                    }
                  }}
                  className={this.state.issues ? "buttonDropDown" : "buttonUp"}
                >
                  For These Issues{" "}
                  <span>
                    <img
                      src="https://user-images.githubusercontent.com/45447942/57102722-02ab6200-6cd9-11e9-888a-9e206d404505.png"
                      alt="arrow"
                    />
                  </span>
                </button>
                <ul
                  className={
                    this.state.issues ? "ticketHistory" : "noTicketHistory"
                  }
                >
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

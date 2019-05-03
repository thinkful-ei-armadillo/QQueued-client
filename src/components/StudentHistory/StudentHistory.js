import React, { Component } from "react";
import StudentDataContext from "../../context/StudentDataContext";
import ApiService from "../../services/api-service";
import "./StudentHistory.css";

export default class StudentHistory extends Component {
  static contextType = StudentDataContext;
  state = {
    helper: true,
    issues: true,
    data: null,
    descriptions: [],
    mentors: []
  };

  componentDidMount() {
    ApiService.getAllData().then(data => {
      this.setState({ data: data }, function() {
        console.log(this.state.data);
      });
    });
    this.fillState();
  }

  fillState() {
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].description) {
        this.setState({
          descriptions: [
            ...this.state.descriptions,
            this.state.data[i].description
          ]
        });
      }
    }
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].mentorName) {
        this.setState({
          mentors: [...this.state.mentors, this.state.data[i].mentorName]
        });
      }
    }

    console.log(this.state.mentors);
    console.log(this.state.descriptions);
  }

  createHistoryTab() {
    console.log(this.props.currentUser);
    console.log(ApiService.getAllData());
    console.log(this.state.data);
    return (
      <>
        <section className="studentHistory">
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
            className={this.state.helper ? "mentorHistory" : "noMentorHistory"}
          >
            {this.state.mentors.length !== 0 ? (
              this.state.mentors.map((m, i) => <li key={i}>{m}</li>)
            ) : (
              <p>loading...</p>
            )}
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
            className={this.state.issues ? "ticketHistory" : "noTicketHistory"}
          >
            {this.state.descriptions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }

  render() {
    return (
      <section className="studentHistory">
        {this.state.data !== null ? this.createHistoryTab() : null}
      </section>
    );
  }
}

import React, { Component } from "react";
import "../StudentHistory.css";

export class StudentHistoryElement extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <li>
        <section>
          <button
            onClick={() => {
              if (!this.state.issues) {
                this.setState({ issues: true });
              } else {
                this.setState({ issues: false });
              }
            }}
            className={this.state.issues ? "ticketDropDown" : "ticketUp"}
          >
            {data.description}
            <span>
              <img
                src="https://user-images.githubusercontent.com/45447942/57102722-02ab6200-6cd9-11e9-888a-9e206d404505.png"
                alt="arrow"
              />
            </span>
          </button>
        </section>
        <section
          className={
            this.state.issues ? "mentorForTicket" : "noMentorForTicket"
          }
        >
          &#8600; Helped by: {data.mentorName}
        </section>
      </li>
    );
  }
}

export default StudentHistoryElement;

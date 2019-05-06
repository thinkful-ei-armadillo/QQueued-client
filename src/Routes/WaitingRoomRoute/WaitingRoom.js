import React, { Component } from "react";
import WaitingList from "../../components/MentorDashboard/WaitingList";
import BeingHelpedList from "../../components/MentorDashboard/BeingHelpedList";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";
import HelpStudentButton from "../../components/HelpStudentButton/HelpStudentButton";
import HasBeenHelpedList from "../../components/MentorDashboard/HasBeenHelpedList";
import "./WaitingRoom.css";

export default class WaitingRoom extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  static contextType = UserContext;
  render() {
    const { full_name } = this.context.user;
    return (
      <QueueProvider>
        <section className="Mentor-List-Section row">
          <div className="keyForMentors col-3">
            <div className="studentName">Students</div>
            <div className="description">Student Issues</div>
            <div className="mentor">Mentors</div>
          </div>
          <section className="Waiting-List-Section">
            <section>Waiting List</section>
            <HelpStudentButton
              mentorName={full_name}
              history={this.props.history}
            />
            <WaitingList />
          </section>
          <div className="col-3">
            <section className="Being-Helped-List-Section">
              <section>Being Helped List</section>
              <BeingHelpedList />
            </section>
          </div>
          <div className="col-3">
            <section className="Has-Been-Helped-List-Section">
              <section>Has Been Helped</section>
              <HasBeenHelpedList />
            </section>
          </div>
        </section>
      </QueueProvider>
    );
  }
}

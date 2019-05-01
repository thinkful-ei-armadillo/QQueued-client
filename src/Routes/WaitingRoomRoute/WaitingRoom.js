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
    console.log(this.props);
    const { full_name } = this.context.user;
    return (
      <QueueProvider>
        <section className="Mentor-List-Section row">
          <div className="keyForMentors col-3">
            <div className="studentName">Students</div>
            <section className="Waiting-List-Section">
              Waiting List
              <HelpStudentButton
                mentorName={full_name}
                history={this.props.history}
              />
              <WaitingList />
            </section>
          </div>
          <div className="col-3">
            <div className="description">Student Issues</div>
            <section className="Being-Helped-List-Section">
              Being Helped List
              <BeingHelpedList />
            </section>
          </div>
          <div className="col-3">
            <div className="mentor">Mentors</div>
            <section className="Has-Been-Helped-List-Section">
              Has Been Helped
              <HasBeenHelpedList />
            </section>
          </div>
        </section>
      </QueueProvider>
    );
  }
}

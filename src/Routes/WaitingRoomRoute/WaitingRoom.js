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
    const { history } = this.props;
    return (
      <QueueProvider>
        <div className="Mentor-List-Section row">
          <section className="keyForMentors col-3">
            <h2 className="studentName">Students Issues</h2>
            <div className="Waiting-List-Section">
              <HelpStudentButton
                mentorName={full_name}
                history={history}
              />
              <WaitingList />
            </div>
          </section>
          <section className="col-3">
            <h2 className="description">Being Helped</h2>
            <div className="Being-Helped-List-Section">
              <BeingHelpedList />
            </div>
          </section>
          <section className="col-3">
            <h2 className="mentor">Has Been Helped</h2>
            <div className="Has-Been-Helped-List-Section">
              <HasBeenHelpedList />
            </div>
          </section>
        </div>
      </QueueProvider>
    );
  }
}

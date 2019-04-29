import React, { Component } from "react";
import WaitingList from "../../components/MentorDashboard/WaitingList";
import BeingHelpedList from "../../components/MentorDashboard/BeingHelpedList";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from '../../context/UserContext';
import HelpStudentButton from "../../components/HelpStudentButton/HelpStudentButton";
import HasBeenHelpedList from "../../components/MentorDashboard/HasBeenHelpedList";
import "./WaitingRoom.css";
export default class WaitingRoom extends Component {
  static contextType = UserContext;
  render() {
    console.log(this.context)
    return (
      <section className="Mentor-List-Section">
        <section className="keyForMentors">
          <div className="studentName">Students</div>
          <div className="description">Student Issues</div>
          <div className="mentor">Mentors</div>
        </section>
        <QueueProvider>
          <section className="Waiting-List-Section">
            Waiting List
            <HelpStudentButton mentorName={ this.context.user.full_name }/>
            <WaitingList />
          </section>
          <section className="Being-Helped-List-Section">
            Being Helped List
            <BeingHelpedList />
          </section>
          <section className="Has-Been-Helped-List-Section">
            Has Been Helped
            <HasBeenHelpedList />
          </section>
        </QueueProvider>
      </section>
    );
  }
}

import React, { Component } from "react";
import WaitingList from "../../components/MentorDashboard/WaitingList";
import BeingHelpedList from "../../components/MentorDashboard/BeingHelpedList";
import { QueueProvider } from "../../context/QueueContext";
import "./WaitingRoom.css";

export default class WaitingRoom extends Component {
  render() {
    return (
      <section className="Mentor-List-Section">
        <QueueProvider>
          <section className="Waiting-List-Section">
            <ul className="ulContainer">
              Waiting List
              <WaitingList />
            </ul>
          </section>
          <section className="Being-Helped-List-Section">
            <ul className="ulContainer">
              Being Helped List
              <BeingHelpedList />
            </ul>
          </section>
        </QueueProvider>
      </section>
    );
  }
}

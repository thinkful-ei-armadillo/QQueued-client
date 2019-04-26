import React, { Component } from 'react';
import WaitingList from '../../components/MentorDashboard/WaitingList';
import BeingHelpedList from '../../components/MentorDashboard/BeingHelpedList';
import { QueueProvider } from '../../context/QueueContext';
import HelpStudentButton from '../../components/HelpStudentButton/HelpStudentButton';
import './WaitingRoom.css';
import { connect } from '../../websockets/test';
export default class WaitingRoom extends Component {
  constructor(props) {
    super(props);

    connect(res => {console.log(res)})
  }

  render() {
    return (
      <section className="Mentor-List-Section">
        <QueueProvider>
          <section className="Waiting-List-Section">
            <ul>
              Waiting List
              <HelpStudentButton />
              <WaitingList />
            </ul>
          </section>
          <section className="Being-Helped-List-Section">
            <ul>
              Being Helped List
              <BeingHelpedList />
            </ul>
          </section>
        </QueueProvider>
      </section>
    );
  }
}

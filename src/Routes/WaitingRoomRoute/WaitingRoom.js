import React, { Component } from 'react';
import WaitingList from '../../components/MentorDashboard/WaitingList';
import BeingHelpedList from '../../components/MentorDashboard/BeingHelpedList';
import { QueueProvider } from '../../context/QueueContext';
import HelpStudentButton from '../../components/HelpStudentButton/HelpStudentButton';
import HasBeenHelpedList from '../../components/MentorDashboard/HasBeenHelpedList';
import './WaitingRoom.css';
export default class WaitingRoom extends Component {
  
  render() {
    return (
      <section className="Mentor-List-Section">
        <QueueProvider>
          <section className="Waiting-List-Section">
            Waiting List
            <HelpStudentButton />
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

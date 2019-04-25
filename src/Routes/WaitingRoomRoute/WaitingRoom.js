import React, { Component } from 'react';
import WaitingList from '../../components/MentorDashboard/WaitingList';
import BeingHelpedList from '../../components/MentorDashboard/BeingHelpedList';
import { QueueProvider } from '../../context/QueueContext';
import HelpForm from '../../components/HelpForm/HelpForm';
import './WaitingRoom.css';

export default class WaitingRoom extends Component {

  render() {
    return (
      <section className='Mentor-List-Section'>
        <QueueProvider>
          <section className='Waiting-List-Section'>
            <WaitingList />
          </section>
          <section className='Being-Helped-List-Section'>
            <BeingHelpedList />
          </section>
          
          <HelpForm />
        </QueueProvider>
      </section>
    );
  }
}
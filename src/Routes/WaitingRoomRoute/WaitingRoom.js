import React, { Component } from 'react';
import WaitingList from '../../components/MentorDashboard/WaitingList';
import BeingHelpedList from '../../components/MentorDashboard/BeingHelpedList';
import { QueueProvider } from '../../context/QueueContext';

export default class WaitingRoom extends Component {

  render() {
    return (
      <div>
        <QueueProvider>
          <WaitingList />
          <BeingHelpedList />
        </QueueProvider>
      </div>
    )
  }
}
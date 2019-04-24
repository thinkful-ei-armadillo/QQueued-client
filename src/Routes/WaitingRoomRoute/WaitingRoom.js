import React, { Component } from 'react';
import StudentsDescriptionList from '../../components/MentorDashboard/StudentsDescriptionList';
import { StudentMentorProvider } from '../../context/StudentMentorContext';

export default class WaitingRoom extends Component {

  render() {
    return (
      <div>
        <StudentMentorProvider>
          <StudentsDescriptionList />
        </StudentMentorProvider>
      </div>
    )
  }
}
import React from 'react';
import StudentQueue from '../../components/StudentDashboard/StudentQueue';
import { QueueProvider } from '../../context/QueueContext';

export default function StudentListRoute() {
  return (
    <QueueProvider>
      <StudentQueue />
    </QueueProvider>
  )
}
import React from 'react';
import QueueContext from '../../context/QueueContext'; 
import "./MentorDashboard.css";
import Button from '../Button/Button';

export default function StudentDescriptionList() {
  const students = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const students = value.queueList;
          return students.map((s, i) => {
            return (
              <li key={i}>
                <span className="studentName">{s.studentName}</span>{" "}
                <span className="description"> {s.description}</span>
              </li>
            );
          });

        }}
      </QueueContext.Consumer>
    );
  };

  return (
    <ul>
      <Button>get next student</Button>
      { students() }
    </ul>
  )
}
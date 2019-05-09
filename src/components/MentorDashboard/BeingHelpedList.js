import React from "react";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboard.css";
import "./MentorDashboardAnimations.css";

export default function BeingHelpedList() {
  const students = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const students = value.currentlyBeingHelped;
          return (
            students.map((student, index) => {
              return (
                <li key={ index } className="hasBeenHelped">
                  <span
                    onClick={ () => value.studentHelped(student.id) }
                    className="studentName"
                  >
                    <span>{ student.studentName }</span>
                  </span>{ " " }
                  <span className="mentor"> { student.mentorName }</span>
                </li>
              );
            })     
          );
        }}
      </QueueContext.Consumer>
    );
  };

  return <ul>{students()}</ul>;
}

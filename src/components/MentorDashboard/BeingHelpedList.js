import React from "react";
import QueueContext from "../../context/QueueContext";

import "./MentorDashboard.css";

export default function BeingHelpedList() {
  const students = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const students = value.currentlyBeingHelped;
          return students.map((s, i) => {
            return (
              <li key={i} className="hasBeenHelped">
                <span
                  onClick={() => value.studentHelped(s.id)}
                  className="studentName"
                >
                  {s.studentName}
                </span>{" "}
                <span className="mentor"> {s.mentorName}</span>
              </li>
            );
          });
        }}
      </QueueContext.Consumer>
    );
  };

  return <ul>{students()}</ul>;
}

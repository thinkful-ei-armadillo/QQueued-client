import React from "react";
import "./MentorDashboard.css";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboardAnimations.css";

export default function HasBeenHelpedList() {
  const makeHelpedList = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const queue = value.hasBeenHelpedList;
          return queue ? 
            queue.map((q, i) => {
              return (
                <li key={i} className="eachStudentInQueue">
                  <span className="studentName helped">{q.studentName}</span>{" "}
                </li>
              );
            })
          : null;
        }}
      </QueueContext.Consumer>
    );
  };

  return (
    <React.Fragment>
      <h3>Completed Sessions</h3>
      <ul>{makeHelpedList()}</ul>
    </React.Fragment>
  )
}

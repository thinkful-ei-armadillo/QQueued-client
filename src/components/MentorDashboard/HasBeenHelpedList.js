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
          return queue ? (
            <div>
                {queue.map((q, i) => {
                  return (
                    <li key={i} className="eachStudentInQueue">
                      <span className="studentName">{q.studentName}</span>{" "}
                    </li>
                  );
                })}
            </div>
          ) : null;
        }}
      </QueueContext.Consumer>
    );
  };

  return <ul>{makeHelpedList()}</ul>;
}

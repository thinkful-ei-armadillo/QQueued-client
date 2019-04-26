import React from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";

export default function StudentQueue() {
  const makeQueue = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const queue = value.queueList;
          return queue.map((q, i) => {
            if (q.studentName) {
              return (
                <li key={i} className="eachStudentInQueue">
                  <div className="studentName">
                    {q.studentName}
                    <span className="tooltiptext">{q.description}</span>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={i} className="eachStudentInQueue">
                  <div className="studentName">
                    Loading...
                    <span className="tooltiptext">Loading...</span>
                  </div>
                </li>
              );
            }
          });
        }}
      </QueueContext.Consumer>
    );
  };

  return (
    <>
      <div className="studentsMainPage">
        <h2 className="studentListTitle">Waiting List</h2>
        <HelpForm className="getHelpButton" />
        <ul className="studentWaitingQueue">{makeQueue()}</ul>
      </div>
    </>
  );
}

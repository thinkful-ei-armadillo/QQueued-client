import React from "react";
import "./MentorDashboard.css";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboardAnimations.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function HasBeenHelpedList() {
  const makeHelpedList = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const queue = value.hasBeenHelpedList;
          return queue ? (
            <div>
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}
              >
                {queue.map((q, i) => {
                  return (
                    <li key={i} className="eachStudentInQueue">
                      <span className="studentName">{q.studentName}</span>{" "}
                    </li>
                  );
                })}
              </ReactCSSTransitionGroup>
            </div>
          ) : null;
        }}
      </QueueContext.Consumer>
    );
  };

  return <ul>{makeHelpedList()}</ul>;
}

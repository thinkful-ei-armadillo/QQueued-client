import React from "react";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboard.css";
import "./MentorDashboardAnimations.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function BeingHelpedList() {
  const students = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const students = value.currentlyBeingHelped;
          return (
            <div>
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}
              >
                {students.map((student, index) => {
                  return (
                    <li key={index} className="hasBeenHelped">
                      <span
                        onClick={() => value.studentHelped(student.id)}
                        className="studentName"
                      >
                        <span>{student.studentName}</span>
                      </span>{" "}
                      <span className="mentor"> {student.mentorName}</span>
                    </li>
                  );
                })}
              </ReactCSSTransitionGroup>
            </div>
          );
        }}
      </QueueContext.Consumer>
    );
  };

  return <ul>{students()}</ul>;
}

import React from "react";
import QueueContext from "../../context/QueueContext";
import "./MentorDashboard.css";
import "./MentorDashboardAnimations.css";

export default function BeingHelpedList(props) {
  function renderButtonToComplete (value, student){
    return (
      <span
        onClick={() => value.studentHelped(student.id)}
        className="studentName"
      > 
        <span>{ student.studentName } - click to remove</span>
      </span>
    )
  }
  function renderNameOnly(student){
    const style = {cursor: "default"}
    return (
      <span
        className="studentName"
        style={style}
      > 
        {student.studentName}
      </span>
    )
  }
  const students = () => {
    return (
      <QueueContext.Consumer>
        {value => {
          const students = value.currentlyBeingHelped;
          return students.map((student, index) => {
            return (
              <li key={index} className="hasBeenHelped">
                 {student.mentorName === props.mentorName? renderButtonToComplete(value, student)
                 : renderNameOnly(student) }
                <span className="mentorName"> {student.mentorName}</span>
              </li>
            );
          });
        }}
      </QueueContext.Consumer>
    );
  };

  return <ul>{students()}</ul>;
}

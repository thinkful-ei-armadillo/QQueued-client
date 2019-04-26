import React from 'react';
import QueueContext from '../../context/QueueContext';

export default function HasBeenHelpedList() {
  const makeHelpedList = () => {
    return (
      <QueueContext.Consumer>
        { value => {
          const queue = value.HasBeenHelpedList;
          return queue ? queue.map((q, i) => {
            return (
              <li key={ i } className="eachStudentInQueue">
                <span className="studentName">{ q.studentName }</span>{ " " }
              </li>
            );
          }) : null;
        } }
      </QueueContext.Consumer>
    )
  }

  return (

    <ul>
      {makeHelpedList()}
    </ul>
  )
    
}
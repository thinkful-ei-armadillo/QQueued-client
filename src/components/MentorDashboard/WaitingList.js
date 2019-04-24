import React from 'react';
import QueueContext from '../../context/QueueContext'; 

export default function StudentDescriptionList() {
  const students = () => {
    return (
      <QueueContext.Consumer>
        { value => {
          console.log(value)
          const students = value.queueList
          return (
            students.map((s, i) => {
              return <li key={ i }>{ s.studentName } <span className="description">  | { s.description }</span></li>
            })
          )
        }}
      </QueueContext.Consumer>
    )
  }

  return (
    <ul>
      {students()}
    </ul>
  )
}
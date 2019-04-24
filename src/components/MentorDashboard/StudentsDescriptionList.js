import React from 'react';
import StudentMentorContext from '../../context/StudentMentorContext'; 

export default function StudentDescriptionList() {
  const students = () => {
    return (
      <StudentMentorContext.Consumer>
        { value => {
          const students = value.users.filter(u => u.title === 'student')
          console.log(students)
          return (
            students.map((s, i) => {
              return <li key={ i }>{ s.name }<span className="description">{ s.desc }</span></li>
            })
          )
        }}
      </StudentMentorContext.Consumer>
    )
  }

  return (
    <ul>
      {students()}
    </ul>
  )
}
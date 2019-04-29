import React from 'react';
import StudentDataContext from '../../context/StudentDataContext';
export default function StudentDataList() {
  
  const createDataList = () => {
    return (
      <StudentDataContext.Consumer>
        { value => {
          const { studentData } = value;
          return studentData.map((s, i) => {
            return (
              <ul key={ i }>
                <li>{ s.user_name }</li>
                <li>{ s.question }</li>
              </ul>
            )

          });
        } }
      </StudentDataContext.Consumer>
    )
  }

  return (
    <>{ createDataList() }</>
  )
}
import React, { useContext } from 'react';
import StudentDataContext from '../../context/StudentDataContext';

export default function StudentInfo(props) {
  const dataContext = useContext(StudentDataContext);
  const { studentData } = dataContext;
  const { studentName } = props.match.params;
  
  const filterStudentInfo = () => {
    return studentData
      .filter(s => s.studentName === studentName)
      .map((s, i) => (
        <section key={i}>
          <h2>{ studentName }</h2>
          <h3>Mentors</h3>
          <ul className='data-list'>
            {s.mentors.map((m, i) => (
              <li key={ i }>{m}</li>
            ))}
          </ul>
          <h3>Questions</h3>
          <ul className='data-list'>
            {s.questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </section>
      ))
  }

  return (
    <>
      {filterStudentInfo()}
    </>
  )
}
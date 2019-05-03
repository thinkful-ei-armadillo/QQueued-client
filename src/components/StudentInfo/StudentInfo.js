import React, { useContext } from 'react';
import StudentDataContext from '../../context/StudentDataContext';

export default function StudentInfo(props) {
  const dataContext = useContext(StudentDataContext);
  const { studentData, notes } = dataContext;
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
          {filterNotes()}
        </section>
      ))
  }

  const filterNotes = () => {
    return notes
      .filter(n => n.studentName === studentName)
      .map((n, i) => (
        <div key={ i }>
          {!n.notes.length
            ? <h3>Student has no notes</h3>
            : <h3>Mentor Notes</h3>
          }
          <ul>
            { n.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      ))
  }

  return (
    <>
      {filterStudentInfo()}
    </>
  )
}
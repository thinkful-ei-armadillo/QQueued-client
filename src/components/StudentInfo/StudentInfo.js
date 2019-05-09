import React, { useContext, Fragment } from "react";
import StudentDataContext from "../../context/StudentDataContext";
import "./StudentInfo.css";

export default function StudentInfo(props) {
  const dataContext = useContext(StudentDataContext);
  const { studentData } = dataContext;
  const { studentName } = props.match.params;

  const filterStudentInfo = () => {
    return studentData
      .filter(s => s.studentName === studentName)
      .map((s, i) => (
        <section className="studentInfo" key={i}>
          <h2>{studentName}</h2>
          <h3>Mentors</h3>
          <ul className="data-lists">
            {s.mentors.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
          <h3>Questions</h3>
          <ul className="data-lists">
            {s.questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
            {filterNotes()}
        </section>
      ));
  };

  const filterNotes = () => {  
    return studentData
      .filter(s => s.studentName === studentName)
      .map((s, i) => (
        <Fragment key={i}>
          { !s.mentorNotes.length ? (
            <h3>Student has no notes</h3>
          ) : (
              <>
                <h3>Mentor Notes</h3>
                <ul className='data-lists'>
                  {s.mentorNotes.map((n, i) => (
                    <li key={i}>
                      {s.mentors.map((m, i) => (
                        <span key={i}>{n[m]}</span>
                      ))}
                    </li>
                  ))}
                </ul>
              </>
            )}
        </Fragment>
      ));
  };

  return (
    <>
      <div className="studentInfo-container">{filterStudentInfo()}</div>
    </>
  );
}

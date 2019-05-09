import React, {Component} from 'react';
import StudentDataContext from '../../context/StudentDataContext';
import DetailsList from './DetailsList';
import './StudentHistory.css';

export default function StudentHistory(props) {

  const returnToSession = (roomId) => {
    const { history } = props;
    history.push(`/room/${roomId}`)
  } 

  const makeListItem = () => {
    return (
      <StudentDataContext.Consumer>
        {value =>
          value.studentHistory.map((s, i) => (
            <div className="history-list-container" key={i}>
              <DetailsList
                mNote={ s.mentor_notes }
                sNote={ s.student_notes }
                description={ s.description }
                returnToSession={ returnToSession }
                room={s.room}
              />
            </div>
          ))
        }
      </StudentDataContext.Consumer>
    );
  }
    


    return (
      <>{ makeListItem() }</>
    );
  
}

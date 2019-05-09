import React, { Component } from "react";
import StudentHistory from '../../components/StudentHistory/StudentHistory';
import { StudentDataProvider } from '../../context/StudentDataContext';
import './StudentHistoryRoute.css';

export class StudentHistoryRoute extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <h3 id={"ticket-history-title"}>Your Ticket History</h3>
        <section className='student-history-section'>
          <StudentDataProvider>
            <StudentHistory history={history} />
          </StudentDataProvider>
        </section>
      </>
    );
  }
}

export default StudentHistoryRoute;

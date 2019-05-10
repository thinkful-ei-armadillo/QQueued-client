import React, { Component } from "react";
import StudentHistory from '../../components/StudentHistory/StudentHistory';
import { StudentDataProvider } from '../../context/StudentDataContext';
import './StudentHistoryRoute.css';

export class StudentHistoryRoute extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { history } = this.props;
    return (
      <section className='student-history-section row'>
        <h2 id="ticket-history-title">Your Ticket History</h2>
        <p>(Click on your question for more info)</p>
        <StudentDataProvider>
          <StudentHistory history={history} />
        </StudentDataProvider>
      </section>
    );
  }
}

export default StudentHistoryRoute;

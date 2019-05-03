import React, { Component } from 'react'
import StudentHistory from '../../components/StudentHistory/StudentHistory'
import UserContext from '../../context/UserContext';

export class StudentHistoryRoute extends Component {
  static contextType = UserContext
  state = {
    historyName: true
  };
  render() {
    const {full_name} = this.context.user;
    return (
    <section className="row">
        <div className="studentHistory col-12">
        <button
          className="buttonHistory"
          type="button"
          onClick={() => {
              if (!this.state.historyName) {
                  this.setState({ historyName: true });
                } else {
                    this.setState({ historyName: false });
                }
            }}
            >
          My Ticket History
        </button>
        <div className={this.state.historyName ? "hide" : "display"}>
          <StudentHistory currentUser={full_name} />
        </div>
      </div>
    </section>
    )
  }
}

export default StudentHistoryRoute

import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";
import StudentWaitingNameList from './studentWaitingNameList/studentWatingNameList'

export default class StudentQueue extends Component {
  static contextType = QueueContext;

  componentDidMount() {
    this.context.webSocket();
    this.context.dequeueWait();
  }

  render() {
    // let note= ''
    // if(this.context.showNote) {
    //   if(this.context.showNote.user_name === this.props.user.user.user_name){
    //     note = (<div>Your mentor {this.context.showNote.mentorName} is waiting</div>)
    //   }
    // }
    const {showNote, queueList} = this.context;
    const userTickets = queueList.filter(
      el => el.studentName === this.props.user.user.full_name
    );
    const numberInLine = queueList.indexOf(userTickets[0]);
  
    return (
      <section>
        <div className="studentsMainPage">
          {showNote.user_name === this.props.user.user.user_name 
            && <div>Your mentor {this.context.showNote.mentorName} is waiting</div>}
          {numberInLine > 0 && <div>You are currently #{numberInLine + 1} in line.</div>}
          {userTickets ? 
            (<div>You have {userTickets.length} open ticket(s).</div>) 
            : (<div>You don't have any tickets open.</div>)}
          <h2 className="studentListTitle">Waiting List</h2>
          <HelpForm className="getHelpButton" />
          <ul className="studentWaitingQueue">
            {queueList.map((listItem, index) => 
              <StudentWaitingNameList key={index} personInLine={listItem} currentUser={this.props.user.user.user_name}/>
            )}
          </ul>
        </div>
      </section>
    );
  }
}



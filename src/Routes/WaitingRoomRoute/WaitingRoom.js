import React, { Component } from "react";
import WaitingList from "../../components/MentorDashboard/WaitingList";
import BeingHelpedList from "../../components/MentorDashboard/BeingHelpedList";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";
import HelpStudentButton from "../../components/HelpStudentButton/HelpStudentButton";
import HasBeenHelpedList from "../../components/MentorDashboard/HasBeenHelpedList";
import "./WaitingRoom.css";

export default class WaitingRoom extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  state = {
    currentView: "waitingList"
  }
  static contextType = UserContext;
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  renderList(list){
    this.setState({ currentView:list})
  }
  renderWaitingList(full_name, history){
    return (
      <React.Fragment>
        <WaitingList />
        <HelpStudentButton
          mentorName={full_name}
          history={history}
        />
      </React.Fragment>
    );
  }
  render() {
    const { full_name } = this.context.user;
    const { history } = this.props;
    return (
      <QueueProvider>
        <section className="row">
          <div className="mentorWrapper">
          <h2 className="mentorTitle">Dashboard</h2>
          <div className="listSelection">
            <div className="listSelection1" onClick={()=> this.renderList('waitingList')}>Student Issues</div>
            <div className="listSelection2" onClick={()=> this.renderList('beingHelpedList')}>Being Helped</div>
            <div className="listSelection3" onClick={()=> this.renderList('CompletedList')}>Completed</div>
          </div>
          <div className="mentorList">
            {this.state.currentView === 'waitingList' && this.renderWaitingList(full_name, history)}
            {this.state.currentView === 'beingHelpedList' && <BeingHelpedList mentorName={full_name}/>}
            {this.state.currentView === 'CompletedList' && <HasBeenHelpedList />}
          </div>
          </div>
        </section>
      </QueueProvider>
    );
  }
}

import React, { Component } from "react";
import "./LandingRoute.css";

export class LandingRoute extends Component {
  render() {
    return (
      <section className="landingPageContainer row">
        <div className='col-12'>
          <h1 className="welcome">Welcome to Git-Rekt</h1>
          <img src="http://lalive.s3.amazonaws.com/img/Line15.jpg" alt="people-inline" className='people-inline'/>
          <p className="landingDescription">
            This is your new tool to help deal with communication between students
            and mentors. This page is a visual queue, allowing mentors to be even
            more transparent with the students in the sense that the students will
            now know where the mentors are. If you're busy dealing with a student
            and aren't sure when you'll be able to get to the next one, this tool
            shows exactly that.
          </p>
          <p className="descriptionSignupLogin">
            To get started, sign up or log in!
          </p>
        </div>
      </section>
    );
  }
}

export default LandingRoute;

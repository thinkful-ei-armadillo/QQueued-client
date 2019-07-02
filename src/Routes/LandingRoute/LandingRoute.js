import React, { Component } from "react";
import "./LandingRoute.css";
import {Link} from 'react-router-dom';
import chat from './chat.svg';
import users from './users.svg';
import slack from './slack.svg';

export class LandingRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-container">
          <section className="lands row">
            <div className='col-12'>
            <h2 className='land'>A communication tool for student and mentors
            </h2>
            <p className="landing-para col-6"> Students are able to create help tickets through the application or via Slack and are able to track where they are in line.</p>
            <Link className="start-btn" to='/register'>
              <button className='startedBtn'>GET STARTED</button>
            </Link>
            </div>
          </section>
        </div>
        <div class="svg-container" style={{height: '98%', overflow: 'hidden'}} >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%' }}>
            <path d="M-10.83,34.64 C172.00,-43.31 305.19,88.91 580.59,-20.63 L500.00,0.00 L0.00,0.00 Z"   class='svg-wave'style={{stroke: 'none'}}>
            </path>
          </svg>  
        </div>
        <section class="row">
          <div className='landing-info col-6'>
            <h2>TRANSPARENCY FOR ALL</h2>
            <p >We help close the gap with communication between student and teachers.</p>
          </div>
        </section>
        <section className="row">
          <div className='col-3'>
            <img className='col-4' alt='chatbox' src={chat}/>
            <h3 className="app-text">Private Chatrooms</h3>
          </div>
          <div  className='col-3'>
            <img className='col-4' src={users} alt='users'/>
            <h3 className="app-text">Exquisite Application made for users</h3>
          </div>
          <div className='col-3'>
            <img className='col-4' src={slack} alt='slack sym'/>
            <h3 className="app-text">Slack Compatibility</h3>
          </div>
        </section>
        <footer role='contentinfo'>
          <div className="footer-container row">
            <h3 className="col-6">
              Get the App TODAY on <a className="github"href='https://github.com/thinkful-ei-armadillo/QQueued-client'>GitHub</a>
            </h3>
            <div className="contribution-container">
            <h3 className="contribution">Contributions By:</h3>
             <ul>
               <li>Robin Khiv</li>
               <li>Matthew Nguyen</li>
               <li>Jonathan Kleinpeter</li>
               <li>Hunter Kreshock</li>
             </ul>
            </div>
          </div>
            
        </footer>
      </React.Fragment>
    );
  }
}

export default LandingRoute;

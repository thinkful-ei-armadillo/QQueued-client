import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './MobileHeader.css'

export default class MobileHeader extends Component {
    renderLogoutLink(title, name) {
        return (
          <div className="Navbar-right-mobile">
            {title === "mentor" ? this.renderMentorLinks(name): this.renderStudentLinks(name)}
            <Link className="Navbar-ToggleShow logout" onClick={this.props.processLogout} to="/login">
              Logout
            </Link>
          </div>
        );
      }
    
      renderLoginLink() {
        return (
          <div className="Navbar-right-mobile">
            <Link className="Navbar-ToggleShow" to="/login">
              Login
            </Link>
            <Link className="Navbar-ToggleShow signUp" to="/register">
              Sign up
            </Link>
          </div>
        );
      }
    
      renderMentorLinks = (name) => {
        return (
          <React.Fragment>
            <Link className="Navbar-ToggleShow data-link" to="/data">
              {name}
            </Link>
            <Link className="Navbar-ToggleShow messageViaSlack" to="/message">
              Slack Message
            </Link>
          </React.Fragment>
        );
      }
      
      renderStudentLinks = (name) => {
        return (
          <Link className="Navbar-ToggleShow student-history-nav" to={ `/history/${name}` }>
            My Ticket History
          </Link>
        )
      }

  render() {
    const {title, name, user} = this.props
    return (
      <React.Fragment>
        {user
            ? this.renderLogoutLink(title, name)
            : this.renderLoginLink()}
      </React.Fragment>
    )
  }
}

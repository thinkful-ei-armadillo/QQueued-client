import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../context/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="logged-in-header">
        <span className="userName">Hello {this.context.user.full_name}!</span>
        <nav>
          {this.context.user && this.context.user.title === "mentor" ? (
            <Link className="messageViaSlack" to="/message">
              Send Message via Slack
            </Link>
          ) : null}
          <Link className="logout" onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav className="logged-out-header">
        <Link className="register" to="/register">
          Sign up
        </Link>
        <Link className="login" to="/login">
          Login
        </Link>{" "}
      </nav>
    );
  }

  renderStudentDataLink = () => {
    return <Link className="data-link" to='/data'>Students Data</Link>
  }

  render() {
    return (
      <header>
        {/* <h1 className="header"> */}
        {this.context.user && this.context.user.title === "mentor" ? (
          <nav className="left-links">
            <Link className='gitRekt' to='/waiting-room'>
              Git-Rekt
            </Link>
            {this.renderStudentDataLink()}
          </nav>
        ) : this.context.user && this.context.user.title === "student" ? (
          <Link className='gitRekt' to='/waiting-list'>
            Git-Rekt
          </Link>
        ) : (
          <Link className='gitRekt' to='/'>
            Git-Rekt
          </Link>
        )}
        {/* </h1> */}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;

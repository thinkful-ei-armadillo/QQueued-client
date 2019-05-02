import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../context/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  }

  renderLogoutLink(title, name) {
    return (
      <div className="Navbar-right">
        <Link className="nav-text-right userName" to={'/'} >{name}</Link>
        {title === "mentor" && this.renderMentorLinks()}
        <Link className="nav-text-right logout" onClick={this.handleLogoutClick} to="/login">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Navbar-right">
        <Link className="nav-text-right register" to="/register">
          Sign up
        </Link>
        <Link className="nav-text-right login" to="/login">
          Login
        </Link>
      </div>
    );
  }

  renderMentorLinks = () => {
    return (
      <React.Fragment>
        <Link className="nav-text-right data-link" to="/data">
          Students Data
        </Link>
        <Link className="nav-text-right messageViaSlack" to="/message">
          Send Message via Slack
        </Link>
      </React.Fragment>
    );
  }

  handleNavToggle (){
    const navs = document.querySelectorAll('.nav-text-right')
    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
  }

  render() {
    const {title, full_name} = this.context.user;
    const checkForUser = TokenService.hasAuthToken();
    const redirectRoute = title === 'mentor' ? '/waiting-room' : '/waiting-list';
    const homeLinkRedirect = checkForUser ? redirectRoute : '/';
    return (
      <header>
        <nav role="navigation">
          <Link className="nav-text brand" to={homeLinkRedirect}>Git-Rekt</Link>
          {checkForUser
            ? this.renderLogoutLink(title, full_name)
            : this.renderLoginLink()}
          <div onClick={this.handleNavToggle} className="Navbar-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

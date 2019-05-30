import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../context/UserContext";
import MobileHeader from './MobileHeader'
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;
  
    state = {
      showMobileNav: null
    }
  
 
  handleLogoutClick = () => {
    this.context.processLogout();
  }

  renderLogoutLink(title, name) {
    return (
      <div className="Navbar-right">
        {title === "mentor" ? this.renderMentorLinks(name): this.renderStudentLinks(name)}
        <Link className="nav-text-right logout" onClick={this.handleLogoutClick} to="/login">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Navbar-right">
        <Link className="nav-text-right login" to="/login">
          Login
        </Link>
        <Link className="nav-text-right register" to="/register">
          Sign up
        </Link>
      </div>
    )
  }

  renderMentorLinks = (name) => {
    return (
      <React.Fragment>
        <Link className="nav-text-right data-link" to="/data">
          {name}
        </Link>
        <Link className="nav-text-right messageViaSlack" to="/message">
          Slack Message
        </Link>
      </React.Fragment>
    );
  }
  
  renderStudentLinks = (name) => {
    return (
      <Link className="nav-text-right student-history-nav" to={ `/history/${name}` }>
        My Ticket History
      </Link>
    )
  }
  handleNavToggle =()=>{
    this.setState({ showMobileNav: true }, () => {
      document.addEventListener("click", this.closeMobileNav);
    });
  }

  closeMobileNav = e => {
    e.stopPropagation();
    this.setState({ showMobileNav: false }, () => {
      document.removeEventListener("click", this.closeMobileNav);
    });
  };

  render() {
    const {title, full_name} = this.context.user;
    const {showMobileNav} = this.state
    const checkForUser = TokenService.hasAuthToken();
    const redirectRoute = title === 'mentor' ? '/waiting-room' : '/waiting-list';
    const homeLinkRedirect = checkForUser ? redirectRoute : '/';
    return (
      <header>
        <nav role="navigation" className="row">
          <Link className="nav-text brand" to={homeLinkRedirect}><span className="brandQQ">QQ</span>ueued</Link>
          {checkForUser
            ? this.renderLogoutLink(title, full_name)
            : this.renderLoginLink()}
          <div onClick={this.handleNavToggle} className="Navbar-toggle">
            <i className="fas fa-bars"></i>
          </div>
          {showMobileNav && <MobileHeader title={title} name={full_name} user={checkForUser} processLogout={()=> this.handleLogoutClick()} />}
        </nav>
      </header>
    );
  }
}

export default Header;

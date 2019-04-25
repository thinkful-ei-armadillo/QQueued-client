import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import UserContext from "../../context/UserContext";

class LoginRoute extends Component {
  static contextType = UserContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const { user } = this.context;
    let destination = null;
    if (user.title === "student") {
      destination = (location.state || {}).from || "/waiting-list";
    } else if (user.title === "mentor") {
      destination = (location.state || {}).from || "/waiting-room";
    }
    history.push(destination);
  };

  render() {
    return (
      <section className="login-container col-3">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;

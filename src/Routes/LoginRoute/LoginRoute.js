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
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    let destination = null;
    destination = (location.state || {}).from || "/waiting-room";
    history.push(destination);
  };

  render() {
    return (
      <section className="login-container row">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;

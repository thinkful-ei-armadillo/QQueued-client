import React, { Component } from "react";
import { Input, Label } from "../Form/Form";
import {Link} from 'react-router-dom'
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../context/UserContext";
import "./LoginForm.css";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;
    this.setState({ error: null });

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm col-6" onSubmit={this.handleSubmit}>
        <div className="loginContainer">
          <h2 className="loginTitle">Login</h2>
          <div role="alert">{error && <p>{error}</p>}</div>
          <div className="loginInput">
            <div className="usernameInput">
              <Label htmlFor="login-username-input" className="username-login">Username : </Label>
              <Input
                ref={this.firstInput}
                id="login-username-input"
                name="user_name"
                required
                />
            </div>
            <div className="passwordInput">
              <Label htmlFor="login-password-input">Password : </Label>
              <Input
                id="login-password-input"
                name="password"
                type="password"
                required
              />
            </div>
            <button className="loginButton" type="submit">
              Login
            </button>
            <Link to='/register' >Register</Link>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;

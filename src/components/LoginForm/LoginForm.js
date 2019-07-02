import React, { Component } from "react";
import { Input, Label } from "../Form/Form";
import {Link} from 'react-router-dom'
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../context/UserContext";
import "./LoginForm.css";
import SpinningLoader from './SpinningLoader.svg'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = UserContext;

  state = { 
    isLoading: false,
    error: null 
  };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({isLoading: true});
    const { user_name, password } = ev.target;
    this.setState({ error: null });

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        this.setState({isLoading: false});
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

  renderLoading() {
    return (<img src={SpinningLoader} alt="spinning loader"/>)
  }

  renderLoginButton(){
    return (
      <div className="loginLinks">
        <button className="loginButton" type="submit">
           Login
        </button>
        <Link to='/register' >Register</Link>
      </div>
    )
  }
  
  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm col-4" onSubmit={this.handleSubmit}>
        <div className="loginContainer">
          <h2 className="loginTitle">Login</h2>
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
            <div role="alert">{error && <p>{error}</p>}</div>
            {this.state.isLoading ? this.renderLoading() : this.renderLoginButton()}  
          </div>
          <div className="demoAccountInfo">
            <h3 className="demoTitle">Demo Users</h3>
            <p className="demoInfo"><strong>Student Account: </strong>v1015181</p>
            <p className="demoInfo"><strong>Student Password: </strong>passworD1</p>
            <p className="demoInfo"><strong>Mentor Account: </strong>admin</p>
            <p className="demoInfo"><strong>Mentor Password: </strong>pass</p>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;

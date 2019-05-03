import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./Registration.css";

export default class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  state = { error: null };

  static contextType = UserContext;

  handleRegistrationSubmit = ev => {
    ev.preventDefault();
    const { user_name, title, full_name, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      full_name: full_name.value,
      title: title.value,
      password: password.value
    })
      .then(res => {
        full_name.value = "";
        title.value = "";
        user_name.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className="registration-form col-6"
        onSubmit={this.handleRegistrationSubmit}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <h2 className="registerTitle">Register</h2>
        <div className="registrationInput">
          <p className="title-selection">Select your title:</p>
          <input
            type="radio"
            id="student"
            name="title"
            value="student"
            required
          />
          <label htmlFor="student">Student</label>
          <input type="radio" id="mentor" name="title" value="mentor" />
          <label htmlFor="mentor">Mentor</label>
          <br />
          <div className="usernameInput">
            <label htmlFor="user_name">Slack/Username : </label>
            <input
              type="text"
              name="user_name"
              className="user_name"
              required
            />
          </div>
          <div className="fullNameInput">
            <label htmlFor="full_name">Full Name : </label>
            <input
              type="text"
              name="full_name"
              className="full_name"
              required
            />
          </div>
          <div className="passwordInput">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              className="password"
              required
            />
          </div>
          <button
            className="registrationSubmit"
            type="submit"
            name="submit">
            Register
          </button>
          
          <section className="alreadyHaveAccount">
            Already have an account?{" "}
            {
              <Link className="loginLink" to="/login">
                Login Here
              </Link>
            }
          </section>
        </div>
      </form>
    );
  }
}

import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./Registration.css";

export default class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  state = { error: null };

  handleRegistrationSubmit = ev => {
    ev.preventDefault();
    const {
      email,
      user_name,
      title,
      full_name,
      nickname,
      password
    } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      email: email.value,
      user_name: user_name.value,
      full_name: full_name.value,
      title: title.value,
      nickname: nickname.value,
      password: password.value
    })
      .then(user => {
        email.value = "";
        full_name.value = "";
        nickname.value = "";
        title.value = "";
        user_name.value = "";
        password.value = "";
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
        className="registration-form col-3"
        onSubmit={this.handleRegistrationSubmit}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="registrationContainer">
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
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" className="email" required />
            <br />
            <label htmlFor="user_name">Slack/Username : </label>
            <input
              type="text"
              name="user_name"
              className="user_name"
              required
            />
            <br />
            <label htmlFor="full_name">Full Name : </label>
            <input
              type="text"
              name="full_name"
              className="full_name"
              required
            />
            <br />
            <label htmlFor="nickname">Nickname : </label>
            <input type="text" name="nickname" className="nickname" />
            <br />
            <label htmlFor="password">password : </label>
            <input type="text" name="password" className="password" required />
            <br />
            <input
              className="registrationSubmit"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </div>
      </form>
    );
  }
}

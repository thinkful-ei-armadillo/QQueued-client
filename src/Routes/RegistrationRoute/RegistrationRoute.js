import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/Registration";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccuess = () => {
    this.props.history.push("/waiting-room");
  };

  render() {
    return (
      <section className="registrationPage row">
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccuess}
        />
      </section>
    );
  }
}

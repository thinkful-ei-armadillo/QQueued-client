import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/Registration";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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

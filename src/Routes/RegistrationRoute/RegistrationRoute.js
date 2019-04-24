import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/Registration'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  }

  handleRegistrationSuccuess = user => {
    this.props.history.push('/login');
  }

  render() {
    return (
      <section className="registrationPage row">
        <RegistrationForm
          onRegistrationSuccess={
            this.handleRegistrationSuccuess
          }
        />
      </section>
    )
  }
}

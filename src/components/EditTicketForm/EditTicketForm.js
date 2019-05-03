import React, { Component } from 'react';
import { Input } from '../Form/Form';
import Button from '../Button/Button';

export default class EditTicketForm extends Component {
  state = {
    description: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { context, toggleEditInput } = this.props
    if (this.validateInput()) {
      context.updateTicket(this.state.description)
      toggleEditInput();
    }
  }

  validateInput = () => {
    return !this.state.description.length ? false : true
  }

  updateDescription = (description) => {
    this.setState({description})
  }

  makeEditForm = () => {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <Input onChange={e => this.updateDescription(e.target.value)} type="text" />
        <Button>Submit</Button>
      </form>
    )
  }

  render() {
    return <>{ this.makeEditForm() }</>
  }
}
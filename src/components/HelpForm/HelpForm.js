import React, { Component } from 'react';
import { Input, Label, Required } from '../Form/Form';
import QueueContext from '../../context/QueueContext';

import './HelpForm.css';
import Button from "../../components/Button/Button";

export default class HelpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      hideInput: true
    }
  }

  static contextType = QueueContext;

  toggleHelpForm = () => {
    this.setState({ hideInput: !this.state.hideInput });
  }

  updateInput = (text) => {
    this.setState({ input: text });
  }

  handleSubmit = (e) => {
    const { addStudent } = this.context;
    e.preventDefault();
    addStudent(this.state.input);
  }

  render() {

    return (
      <>
      <Button onClick={ () => this.toggleHelpForm() }>Get Help!</Button>
        <section className="Help-Form-Section">
          <form onSubmit={ e => this.handleSubmit(e) }>
            <div className={this.state.hideInput ? "hidden" : ""}>
              <Input
                className={"Help-Form-Input"}
                onChange={ e => this.updateInput(e.target.value) }
                type={"text"}
              />
              <Button type={"submit"}>Submit</Button>
            </div>
          </form>
        </section>
      </>
    );
  }
}
import React, { Component } from "react";
import { Label } from "../Form/Form";
import Button from "../Button/Button";
import apiService from "../../services/api-service";
import QueueContext from "../../context/QueueContext";
import "./NotesForm.css";

export default class NotesForm extends Component {
  static contextType = QueueContext;
  state = {
    note: "",
    error: null,
    hasError: null
  };

  handleSubmit = e => {
    const { user } = this.props.context;
    const { queue_id } = this.props.state;
    e.preventDefault();
    const { hasError, error } = this.ValidateUser(user);
    if (hasError) {
      this.setState({ hasError, error });
    } else {
      apiService.postNote(this.state.note, queue_id).then(res => {
        console.log(res);
        this.setState({ note: "", error: null, hasError: null });
      });
    }
  };

  ValidateUser = user => {
    let hasError = false;
    let error = "";

    if (user.title !== "mentor") {
      hasError = true;
      error = "only mentors can make notes";
    }

    if (!this.state.note) {
      hasError = true;
      error = "notepad is empty";
    }

    return { hasError, error };
  };

  updateNote = note => {
    this.setState({ note });
  };

  createForm = () => {
    return (
      <form onSubmit={e => this.handleSubmit(e)} id="note-form">
        {this.state.hasError ? <p>{this.state.error}</p> : null}
        <Label htmlFor="note">Enter Note</Label>
        <textarea
          onChange={e => this.updateNote(e.target.value)}
          form="note-form"
          id="note"
          name="note-input"
          rows="15"
          cols="35"
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  };

  render() {
    return <section id="note-form-section">{this.createForm()}</section>;
  }
}

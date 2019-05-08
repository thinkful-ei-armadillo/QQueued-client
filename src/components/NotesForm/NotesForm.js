import React, { Component } from "react";
import { Label } from "../Form/Form";
import Button from "../Button/Button";
import apiService from "../../services/api-service";
import QueueContext from "../../context/QueueContext";
import "./NotesForm.css";

export default class NotesForm extends Component {
  static contextType = QueueContext;
  constructor(){
    super();
    this.noteInput = React.createRef();
    this.state = {
      error: null,
      hasError: null,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {noteId} = this.props
    const note = this.noteInput.current.value

    console.log(noteId)
    console.log(note)
    apiService.postNote(note, noteId).then(()=> console.log('done'));
    
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

  // createForm = () => {
  //   return (
    
  //   )
  // }
  render() {
    console.log(this.props.noteId)
    return (
      // <section id="note-form-section">
      //   {this.createForm()}
      // </section>
        <form onSubmit={this.handleSubmit} id="note-form" className="c ol-3">
        { this.state.hasError
          ? <p>{ this.state.error }</p>
          : null
        }
        <Label htmlFor="note">Notes</Label>
        <textarea id="note" ref={this.noteInput} name="note-input" required/>
        <Button type="submit" className="save">save</Button>
      </form>
    )
  }
}

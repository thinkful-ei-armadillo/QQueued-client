import React, { Component } from 'react';
import { Label } from '../Form/Form';
import Button from '../Button/Button';
import './NotesForm.css';

export default class NotesForm extends Component {
  state = {
    comment: '',
    error: null,
    hasError: false
  }

  createForm = () => {
    return (
      <form id="note-form">
        <Label htmlFor="note">Enter Note</Label>
        <textarea form="note-form" id="note" name="note-input" rows="35" cols="35" />
        <Button type="submit">Submit</Button>
      </form>
    )
  }

  render() {
    return (
      <section id="note-form-section">{this.createForm()}</section>
    )
  }
}
import React, { Component } from 'react';

export default class DetailsList extends Component {
  state = {
    hidden: true
  }
  

  toggleHidden() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const {
      mNote,
      sNote,
      description,
      room,
      returnToSession
    } = this.props;

    return (
      this.state.hidden
        ? <span onClick={ () => this.toggleHidden() }>
            {description}
          </span>
        : <span onClick={ () => this.toggleHidden() }>
            {description}
            <ul>
              <li>mentor note: { mNote }</li>
              <li>student note: { sNote } </li>
            </ul>
            <button onClick={ () => returnToSession(room) }>
              return to session
            </button>
          </span>
    )
  }
}
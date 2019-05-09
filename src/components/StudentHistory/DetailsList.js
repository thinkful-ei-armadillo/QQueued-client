import React, { Component } from 'react';

export default class DetailsList extends Component {
  state = {
    hidden: true
  }
  
  toggleHidden() {
    this.setState({ hidden: !this.state.hidden });
  }
  
  hideContent(description){
    return (
      <span onClick={ () => this.toggleHidden() }>
        {description}
      </span>
    )
  }

  renderContent(list){
    const {description, mNote, sNote, room, returnToSession} = list;
    return (
      <React.Fragment>
        <span onClick={ () => this.toggleHidden() }>
          {description}
          <ul>
            <li><strong>Mentor Note: </strong> { mNote }</li>
            <li><strong>Student Note: </strong> { sNote } </li>
          </ul>
          <button onClick={ () => returnToSession(room) }>
            return to session
          </button>
        </span>
      </React.Fragment>
    )
  }

  render() {
    const { mNote, sNote, description, room, returnToSession} = this.props;
    const displayList = {description, mNote, sNote, room, returnToSession};
    return (
      <React.Fragment>
        {this.state.hidden
        ? this.hideContent(description)
        : this.renderContent(displayList)}
      </React.Fragment>
    )
  }
}
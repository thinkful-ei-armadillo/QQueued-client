import React, { createContext, Component } from 'react';

const ChatContext = createContext({
  error: null,
  users: [],
  inactiveUsers: [],
  comment: null,
  note: null,
  updateUsers: () => { },
  setError: () => { },
  clearError: () => { }
});

export default ChatContext;

export class ChatContextProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      error: null,
      users: [],
      inactiveUsers: [],
      comment: null,
      note: null
    };
    this.state = state;
  }

  render() {
    const value = {
      error: this.state.error,
      users: this.state.activeUsers,
      inactiveUsers: this.state.users,
      comment: this.state.comment,
      note: this.state.note
    }

    return (
      <ChatContext.Provider value={value}>
        {this.props.children}
      </ChatContext.Provider>
    )
  }

}

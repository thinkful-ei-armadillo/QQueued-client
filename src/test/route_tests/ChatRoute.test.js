import React from "react";
import ReactDOM from "react-dom";
import ChatRoute from '../../Routes/ChatRoute/ChatRoute';
import { MemoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';


describe("ChatRoute function component", () => {

  const history = createBrowserHistory();
  const state = { queue_id: 1 };

  history.location.state = state;

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatRoute history={ history }/>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})

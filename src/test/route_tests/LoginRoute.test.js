import React from "react";
import ReactDOM from "react-dom";
import LoginRoute from '../../Routes/LoginRoute/LoginRoute';
import { MemoryRouter } from 'react-router-dom';

describe("LoginRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginRoute />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
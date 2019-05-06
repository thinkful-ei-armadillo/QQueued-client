import React from "react";
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import { MemoryRouter } from 'react-router-dom';


describe("LoginForm class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
import React from "react";
import TestRenderer from "react-test-renderer";
import Header from '../components/Header/Header';
import ReactDOM from "react-dom";
import { MemoryRouter } from 'react-router-dom';

describe("Header class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>, div)
    ReactDOM.unmountComponentAtNode(div);
  });
});
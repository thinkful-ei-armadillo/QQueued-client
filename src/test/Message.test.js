import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import Message from '../components/Message/Message';

describe("Message class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Message />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
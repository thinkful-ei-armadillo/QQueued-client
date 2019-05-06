import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import ChatRoute from '../../Routes/ChatRoute/ChatRoute';

describe("ChatRoute function component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatRoute />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

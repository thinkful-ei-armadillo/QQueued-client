import React from "react";
import ReactDOM from "react-dom";
import MessageRoute from '../../Routes/MessageRoute/MessageRoute';

describe("MessageRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MessageRoute />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})
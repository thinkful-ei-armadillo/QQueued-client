import React from "react";
import ReactDOM from "react-dom";
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute';

describe("NotFoundRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <NotFoundRoute />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
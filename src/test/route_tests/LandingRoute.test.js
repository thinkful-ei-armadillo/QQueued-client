import React from "react";
import ReactDOM from "react-dom";
import LandingRoute from '../../Routes/LandingRoute/LandingRoute';

describe("LandingRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingRoute />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

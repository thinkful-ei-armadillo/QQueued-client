import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import RegistrationFrom from '../../components/RegistrationForm/Registration';

describe("RegistrationForm class component", () => {
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RegistrationFrom />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
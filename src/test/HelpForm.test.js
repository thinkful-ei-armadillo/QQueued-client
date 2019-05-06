import React from "react";
import TestRenderer from "react-test-renderer";
import HelpForm from '../components/HelpForm/HelpForm';
import ReactDOM from "react-dom";

describe("HelpForm class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HelpForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
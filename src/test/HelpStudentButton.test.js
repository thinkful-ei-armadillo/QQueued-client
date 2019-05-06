import React from "react";
import TestRenderer from "react-test-renderer";
import HelpStudentButton from '../components/HelpStudentButton/HelpStudentButton';
import ReactDOM from 'react-dom';

describe("HelpStudentButton function component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HelpStudentButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
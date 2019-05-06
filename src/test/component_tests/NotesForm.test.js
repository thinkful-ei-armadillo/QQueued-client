import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import NotesForm from '../../components/NotesForm/NotesForm';

describe("NotesForm class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotesForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
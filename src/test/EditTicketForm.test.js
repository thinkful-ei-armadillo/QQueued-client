import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import EditTicketForm from '../components/EditTicketForm/EditTicketForm'

describe('EditTicketForm class component', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EditTicketForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
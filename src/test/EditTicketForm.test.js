import React from "react";
import TestRenderer from "react-test-renderer";
import EditTicketForm from '../components/EditTicketForm/EditTicketForm'

describe('EditTicketForm class component', () => {
  it("renders without crashing", () => {
    const testEditTicketForm = TestRenderer.create(<EditTicketForm />)
    expect(testEditTicketForm.getInstance())
    testEditTicketForm.unmount()
  });
})
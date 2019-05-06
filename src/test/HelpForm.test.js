import React from "react";
import TestRenderer from "react-test-renderer";
import HelpForm from '../components/HelpForm/HelpForm';

describe("HelpForm class component", () => {
  it("renders without crashing", () => {
    const testHelpForm = TestRenderer.create(
      <HelpForm />
    );
    expect(testHelpForm.getInstance());
    testHelpForm.unmount();
  });
});
import React from "react";
import TestRenderer from "react-test-renderer";
import HelpForm from '../components/HelpForm/HelpForm';

describe("HelpForm class component", () => {
  it.skip("renders without crashing", () => {
    //const testHelpForm = TestRenderer.
  });
  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<HelpForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});
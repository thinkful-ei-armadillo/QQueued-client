import React from "react";
import TestRenderer from "react-test-renderer";
import HelpStudentButton from "../components/HelpStudentButton/HelpStudentButton"

describe("", () => {
  it.skip("renders without crashing", () => {});

  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<HelpStudentButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});
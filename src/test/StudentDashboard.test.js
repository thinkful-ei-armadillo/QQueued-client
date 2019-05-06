import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import StudentQueue from '../components/StudentDashboard/StudentQueue';
import StudentWaitingNameList from '../components/StudentDashboard/studentWaitingNameList/studentWaitingNameList';

describe("StudentDashboard components", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('StudentQueue class component', () => {
    it("renders without crashing", () => {
      ReactDOM.render(<StudentQueue />, div);
    });
  })

  describe('StudentWaitingNameList class component', () => {
    it('renders without crashing', () => {
      ReactDOM.render(<StudentWaitingNameList />, div);
    })
  })
  
});
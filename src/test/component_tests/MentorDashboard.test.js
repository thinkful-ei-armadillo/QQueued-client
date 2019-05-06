import React from 'react';
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import BeingHelpedList from '../../components/MentorDashboard/BeingHelpedList';
import HasBeenHelpedList from '../../components/MentorDashboard/HasBeenHelpedList';
import WaitingList from '../../components/MentorDashboard/WaitingList';

describe("MentorDashboard components", () => {
  let div;
  
  beforeEach(() => {
    div = document.createElement('div');
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('BeingHelpedList function component', () => {

    it("renders without crashing", () => {
      ReactDOM.render(<BeingHelpedList />, div);
    });
  })

  describe('HasBeenHelpedList function component', () => {

    it("renders without crashing", () => {
      ReactDOM.render(<HasBeenHelpedList />, div)
    })
  })

  describe('WaitingList class component', () => {

    it("renders without crashing", () => {
      ReactDOM.render(<WaitingList />, div)
    })
  })
});
import React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import StudentQueue from '../../components/StudentDashboard/StudentQueue';
import StudentWaitingNameList from '../../components/StudentDashboard/studentWaitingNameList/studentWaitingNameList';

describe("StudentDashboard components", () => {
  let div;
  let user;

  beforeEach(() => {
    user = {
      id: 4,
      full_name: "Jonathan",
      user_name: "student3",
      title: "student"
    };

    div = document.createElement("div");
  })

  afterEach(() => {
    user = {};
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('StudentQueue class component', () => {
    it("renders without crashing", () => {
      ReactDOM.render(
        <MemoryRouter>
          <StudentQueue user={user} />
        </MemoryRouter>,
        div
      );
    });
  })

  describe('StudentWaitingNameList class component', () => {
    it('renders without crashing', () => {
      ReactDOM.render(
        <MemoryRouter>
          <StudentWaitingNameList personInLine={ user } />
        </MemoryRouter>,
        div
      );
    })
  })

});
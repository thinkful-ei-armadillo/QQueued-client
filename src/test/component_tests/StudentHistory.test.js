import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { MemoryRouter } from 'react-router-dom';
import StudentHistory from '../../components/StudentHistory/StudentHistory'
import StudentHistoryElement from '../../components/StudentHistory/StudentHistoryElement/StudentHistoryElement';

describe("StudentHistory Components", () => {
  let div;
  let data = [
    {
      id: 8,
      description: "test 3",
      user_name: "student3",
      studentName: "Jonathan",
      mentorName: "Dunder Mifflin Admin"
    },
    {
      id: 9,
      description: "test 2",
      user_name: "student3",
      studentName: "Jonathan",
      mentorName: "Dunder Mifflin Admin"
    },
    {
      id: 10,
      description: "tes 1",
      user_name: "student3",
      studentName: "Jonathan",
      mentorName: "Dunder Mifflin Admin"
    }
  ]

  beforeEach(() => {
    div = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  describe("StudentHistory class component", () => {

    it("renders without crashing", () => {
      ReactDOM.render(
        <MemoryRouter>
          <StudentHistory data={ data } />
        </MemoryRouter>,
        div
      );
    });

  })

  describe("StudentHistoryElement class component", () => {
    it("renders without crashing", () => {
      ReactDOM.render(
        <MemoryRouter>
          <StudentHistoryElement data={ data } />
        </MemoryRouter>,
        div
      )
    })
  })
});
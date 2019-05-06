import React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Graph from '../components/Graph/Graph';
import { Pie } from "react-chartjs-2";

describe("Graph class component", () => {
  it("renders without crashing", () => {

    const studentData = [
      {
        studentName: "Robin",
        mentors: ["Dunder Mifflin Admin"],
        questions: ["help me i dont know what im doing", "help me i dont know what im doing"]
      },

      {
        studentName: "Jonathan",
        mentors: ["Dunder Mifflin Admin"],
        questions: ["test 3", "test 2", "tes 1"]
      }
    ]

    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Graph data={studentData} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  
});
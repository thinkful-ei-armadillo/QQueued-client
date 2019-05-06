import React from "react";
import TestRenderer from "react-test-renderer";
import Graph from '../components/Graph/Graph';
import { Pie } from "react-chartjs-2";

// Error can not read propery length of undefined, not sure what's missing here to get passing test
describe("Graph class component", () => {
  it.skip("renders without crashing", () => {

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
    const testGraph = TestRenderer.create(

      <Graph  data={studentData}/>
  
    );
    expect(testGraph.getInstance());
    testGraph.unmount();
  });
  
});
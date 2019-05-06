import React from "react";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import StudentDataList from '../../components/StudentDataList/StudentDataList';

describe("StudentDataList class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudentDataList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
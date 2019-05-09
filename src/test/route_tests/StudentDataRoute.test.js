import React from "react";
import ReactDOM from "react-dom";
import StudentDataRoute from '../../Routes/StudentDataRoute/StudentDataRoute';

describe("StudentDataRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StudentDataRoute />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
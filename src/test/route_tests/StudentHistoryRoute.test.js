import React from "react";
import ReactDOM from "react-dom";
import StudentHistoryRoute from '../../Routes/StudentHistoryRoute/StudentHistoryRoute';

describe("StudentHistoryRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StudentHistoryRoute />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
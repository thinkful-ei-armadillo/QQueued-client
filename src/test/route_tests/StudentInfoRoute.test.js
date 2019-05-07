import React from "react";
import ReactDOM from "react-dom";
import StudentInfoRoute from '../../Routes/StudentInfoRoute/StudentInfoRoute';

describe("StudentInfoRoute function component", () => {

  const match = {
    isExact: true,
    params: { studentName: "Robin" },
    path: "/data/:studentName",
    url: "/data/Robin"
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StudentInfoRoute match={match} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
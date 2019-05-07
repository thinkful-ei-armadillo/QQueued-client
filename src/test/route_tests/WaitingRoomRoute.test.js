import React from "react";
import ReactDOM from "react-dom";
import WaitingRoomRoute from '../../Routes/WaitingRoomRoute/WaitingRoom';

describe("WaitingRoomRoute class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <WaitingRoomRoute />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
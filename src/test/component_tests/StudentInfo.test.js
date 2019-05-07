import React from "react";
import ReactDOM from "react-dom";
import StudentInfo from '../../components/StudentInfo/StudentInfo';

describe("StudentInfo function component", () => {
  const match = {
    isExact: true,
    params: { studentName: "Robin" },
    path: "/data/:studentName",
    url: "/data/Robin"
  }

  const data = {
    studentData: [
      {
        studentName: "Robin",
        mentors: ["Dunder Mifflin Admin"],
        questions: ["help me i dont know what im doing", "halp!"]
      },
      {
        studentName: "Jonathan",
        mentors: ["test mentor"],
        questions: ["test q", "test q 2", "test q 3"]
      }
    ],
    notes: [
      {
        studentName: "Hunter",
        notes: ["note 1"]
      },
      {
        studentName: "Jonathan",
        notes: ["note 1", "note 2", "note 3"]
      },
      {
        studentName: "Robin",
        notes: []
      }
    ]
  };

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudentInfo dataContext={data} match={match} />, div)
    ReactDOM.unmountComponentAtNode(div);
  });
});
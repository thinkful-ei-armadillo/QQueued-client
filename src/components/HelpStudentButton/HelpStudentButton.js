import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";
import "./HelpStudentButton.css";

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);

  const { mentorName } = props;
  return (
    <Button onClick={() => context.helpStudent(mentorName)}>
      Help a student
    </Button>
  );
}

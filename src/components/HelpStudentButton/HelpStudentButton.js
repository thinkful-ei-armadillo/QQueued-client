import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";
import "./HelpStudentButton.css";

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);
  const { mentorName } = props;

  const handleOnClick = () => {
    let history = {
      push: () => {}
    };

    context.helpStudent(mentorName);
    history.push(`/mentor/${mentorName}`);
  };

  return <Button onClick={() => handleOnClick()}>Help a student</Button>;
}

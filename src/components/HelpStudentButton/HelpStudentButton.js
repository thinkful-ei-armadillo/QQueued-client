import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);
  const { mentorName } = props;
  const { history } = props;

  const handleOnClick = () => {
    context.queueList[0].mentorName = mentorName
    context.tellUser(context.queueList[0])
    context.helpStudent(mentorName, history);
  };

  return <Button onClick={() => handleOnClick()}>Help a student</Button>;
}

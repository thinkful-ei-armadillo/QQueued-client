import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);
  const { mentorName } = props;
  const { history } = props;

  // const queueLength = context.queueList.length;

  const route = `/mentor/${mentorName}`;

  const handleOnClick = () => {
    context.helpStudent(mentorName);
    // if(context.queueList.length === queueLength -1 ) {
    history.push(route);
    // }
  };

  return <Button onClick={() => handleOnClick()}>Help a student</Button>;
}

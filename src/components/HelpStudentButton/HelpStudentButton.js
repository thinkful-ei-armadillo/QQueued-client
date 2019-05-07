import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";
import slackService from "../../services/slack-api-service";
import uuidv4 from "uuid";
import "./HelpStudentButton.css";

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);
  const { mentorName } = props;
  const { history } = props;

  const handleOnClick = () => {
    const uuid = uuidv4();
    if (context.queueList.length > 0) {
      context.queueList[0].mentorName = mentorName;
      context.queueList[0].url = `/mentor/${uuid}`;
      if (context.queueList[0].slack_user_id) {
        const text = `Your mentor is ready go at http://localhost:3000${uuid}`;
        slackService.openDmAndMessage(context.queueList[0].slack_user_id, text);
      }

      context.tellUser(context.queueList[0]);
      context.helpStudent(mentorName, history, context.queueList[0].id);
    }
  };

  return (
    <Button className="helpStudentButton" onClick={() => handleOnClick()}>
      Help a student
    </Button>
  );
}

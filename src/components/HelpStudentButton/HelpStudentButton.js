import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";
import slackService from "../../services/slack-api-service";
import uuidv4 from "uuid";
import config from "../../config";

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);

  const handleOnClick = function() {
    const uuid = uuidv4();
    const { mentorName } = props;
    const { history } = props;
    const queueList = context.queueList[0];

    if (context.queueList.length) {
      queueList.mentorName = mentorName;
      queueList.url = `/room/${uuid}`;
      context.tellUser(queueList);
      context.helpStudent(mentorName, history, queueList.id, uuid);
      if (queueList.slack_user_id) {
        const text = `Your mentor is ready go at ${config.APP_URL}${uuid}`;
        slackService.openDmAndMessage(queueList.slack_user_id, text);
      }
    }
  };

  return <Button onClick={() => handleOnClick()}>Help a student</Button>;
}

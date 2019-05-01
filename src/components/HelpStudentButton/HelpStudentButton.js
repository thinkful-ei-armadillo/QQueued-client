import React, { useContext } from "react";
import QueueContext from "../../context/QueueContext";
import Button from "../../components/Button/Button";
import slackService from "../../services/slack-api-service"

export default function HelpStudentButton(props) {
  const context = useContext(QueueContext);
  const { mentorName } = props;
  const { history } = props;

  const handleOnClick = () => {
    if(context.queueList.length > 0){
    context.queueList[0].mentorName = mentorName
    context.queueList[0].url = `/mentor/${encodeURI(mentorName)}`
    if(context.queueList[0].slack_user_id) {
      const text = `Your mentor is ready go at ${context.queueList[0].url}`
      slackService.openDmAndMessage(context.queueList[0].slack_user_id, text)
    }
    context.tellUser(context.queueList[0])
    context.helpStudent(mentorName, history);
  }
  };

  return <Button onClick={() => handleOnClick()}>Help a student</Button>;
}

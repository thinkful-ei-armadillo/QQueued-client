import React, { useContext } from "react";
import Chat from "../../components/Chat/Chat";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotesForm from '../../components/NotesForm/NotesForm';
import "./ChatRoute.css";

export default function ChatRoute(props) {
  const context = useContext(UserContext);
  const { state } = props.history.location;
  
  return (
    <QueueProvider>
      <Link className="linkBack" to={`/waiting-room`}>
        <Button className="button">
          <span>Back</span>
        </Button>
      </Link>
      <NotesForm state={state} context={context} />
      <Chat user={context} />
    </QueueProvider>
  );
}

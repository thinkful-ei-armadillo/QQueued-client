import React, { useContext } from "react";
import Chat from "../../components/Chat/Chat";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";
import NotesForm from '../../components/NotesForm/NotesForm';
import "./ChatRoute.css";

export default function ChatRoute(props) {
  const context = useContext(UserContext);
  const { state } = props.history.location;
  
  return (
    <QueueProvider>
      <section className="row">
        <Chat user={context.user} />
        <NotesForm state={state} context={context} />
      </section>
    </QueueProvider>
  );
}

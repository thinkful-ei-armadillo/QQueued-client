import React, { useContext } from "react";
import Chat from "../../components/Chat/Chat";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";
import NotesForm from '../../components/NotesForm/NotesForm';
import "./ChatRoute.css";

export default function ChatRoute(props) {
  const context = useContext(UserContext);
  const {roomId} = props.match.params
  return (
    <QueueProvider>
      <section className="row">
        <Chat user={context.user}/>
        <NotesForm noteId={roomId}/>
      </section>
    </QueueProvider>
  );
}

import React, { useContext } from "react";
import Chat from "../../components/Chat/Chat";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";

export default function ChatRoute() {
  const context = useContext(UserContext);
  return (
    <QueueProvider>
      <ChatRoom user={context} />
      <Chat user={context} />
    </QueueProvider>
  );
}

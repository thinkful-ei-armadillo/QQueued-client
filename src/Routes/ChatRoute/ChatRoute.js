import React, { useContext } from "react";
import Chat from "../../components/Chat/Chat";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./ChatRoute.css";

export default function ChatRoute() {
  const context = useContext(UserContext);
  return (
    <QueueProvider>
      <Link className="linkBack" to={`/waiting-room`}>
        <Button className="button">
          <span>Back </span>
        </Button>
      </Link>
      <Chat user={context} />
    </QueueProvider>
  );
}

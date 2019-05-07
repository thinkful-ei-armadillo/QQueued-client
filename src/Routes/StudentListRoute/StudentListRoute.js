import React, { useContext } from "react";
import StudentQueue from "../../components/StudentDashboard/StudentQueue";
import { QueueProvider } from "../../context/QueueContext";
import UserContext from "../../context/UserContext";

export default function StudentListRoute() {
  const context = useContext(UserContext);

  return (
    <QueueProvider>
      <StudentQueue user={context.user} />
    </QueueProvider>
  );
}

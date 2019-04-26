import React from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";

export default function StudentQueue() {

  const makeQueue = () => {
    return (
      <QueueContext.Consumer>
        {value => {
         value.webSocket();
          const queue = value.queueList;
          return queue.map((q, i) => {
            return (
              <li key={ i }>
                <span className="studentName">{ q.studentName }</span>{ " " }
              </li>
            )
          })
        }}
      </QueueContext.Consumer>
    )
  }

  return (
    <>
      <div>
        <h2>Waiting List</h2>
        <ul>{makeQueue()}</ul>
      </div>
      <HelpForm />
    </>
  );
}

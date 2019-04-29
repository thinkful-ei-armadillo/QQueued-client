import React, { Component } from "react";
import QueueContext from "../../context/QueueContext";
import HelpForm from "../../components/HelpForm/HelpForm";
import "./StudentQueue.css";

// export default function StudentQueue() {
//   const context = useContext(QueueContext);
//   useEffect(() => {
//     context.webSocket()
//   })
//   const makeQueue = () => {
//     return (
//       <QueueContext.Consumer>
//         {value => {
//           const queue = value.queueList;
//           return queue.map((q, i) => {
//             if (q.studentName) {
//               return (
//                 <li key={i} className="eachStudentInQueue">
//                   <div className="studentName">
//                     {q.studentName}
//                     <span className="tooltiptext">{q.description}</span>
//                   </div>
//                 </li>
//               );
//             } else {
//               return (
//                 <li key={i} className="eachStudentInQueue">
//                   <div className="studentName">
//                     Loading...
//                     <span className="tooltiptext">Loading...</span>
//                   </div>
//                 </li>
//               );
//             }
//           });
//         }}
//       </QueueContext.Consumer>
//     );
//   };

//   return (
//     <>
//       <div className="studentsMainPage">
//         <h2 className="studentListTitle">Waiting List</h2>
//         <HelpForm className="getHelpButton" />
//         <ul className="studentWaitingQueue">{makeQueue()}</ul>
//       </div>
//     </>
//   );
// }

export default class StudentQueue extends Component {
  static contextType = QueueContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.context.webSocket();
    this.context.dequeueWait();
  }
  render() {
    let makeQueue = [];
    if (this.context.queueList.length > 0) {
      makeQueue = this.context.queueList.map((i, j) => {
        return (
          <li key={j} className="eachStudentInQueue">
            <div className="studentName">
              {i.studentName}
              <span className="tooltiptext">{i.description}</span>
            </div>
          </li>
        );
      });
    }

    return (
      <div>
        <div className="studentsMainPage">
          <h2 className="studentListTitle">Waiting List</h2>
          <HelpForm className="getHelpButton" />
          <ul className="studentWaitingQueue">{makeQueue}</ul>
        </div>
      </div>
    );
  }
}

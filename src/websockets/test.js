import openSocket from "socket.io-client";
import config from '../config';
const socket = openSocket("https://dry-depths-54014.herokuapp.com");

function connect(cb) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the
  // callback function with said message
  socket.on("FromAPI", message => {
    // trigger the callback passed in when
    // our App component calls connect
    cb(message);
  });
}
function newTicket(cb) {
  socket.on('new-ticket', data =>{
    cb(data)
  })
}
function disconnect() {
  socket.close()
}

function dequeueTicket(cb) {
  socket.on('dequeue', data => {
    if(data === 1) {
      cb(data)
    }
  })
}

export { connect, disconnect, newTicket, dequeueTicket };

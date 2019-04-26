import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

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

function disconnect() {
  socket.on("disconnect", () => {
    socket.disconnect();
  });
}

export { connect, disconnect };

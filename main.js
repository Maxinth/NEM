import httpStatus from "http-status-codes";
import http from "node:http";
import {data} from './db.js'

const port = 5000;
const { createServer } = http;

// create the server
const app = createServer((req, res) => {
  console.log("Received an incoming request!");
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });

//   let responseMsg = "<h1>Hello, Node!</h1>";
//   res.write(responseMsg);
  res.write(JSON.stringify(data))
  //   res.write("sending a string instead of html");
  res.end(); // close server connection right after the responses have been sent
  // console.log(`Sent a response: ${responseMsg}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

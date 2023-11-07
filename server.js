// const os = require("os");

// console.log(os.hostname());
// console.log(os.platform());

// const fs = require("fs");

// fs.writeFileSync("hello.txt", "my name is garvit");

const http = require("http");

const port = 5000;

http
  .createServer((req, res) => {
    console.log("server started");
  })
  .listen(port);

// const os = require("os");

// console.log(os.hostname());
// console.log(os.platform());

// const fs = require("fs");

// fs.writeFileSync("hello.txt", "my name is garvit");

const http = require("http");

const port = 5000;

http
  .createServer((req, res) => {
    let data = "my name is garvit dhameliya";
    console.log("server  started");

    res.write("hello world");

    res.write(data);

    res.end();
  })
  .listen(port);

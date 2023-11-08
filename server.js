// const os = require("os");

// console.log(os.hostname());
// console.log(os.platform());

// const fs = require("fs");

// fs.writeFileSync("hello.txt", "my name is garvit");

const http = require("http");

// const port = 5000;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("index success");
});

app.get("/getuser", (req, res) => {
  res.status(200).send([
    {
      data: "data 1",
    },
    {
      data: "data 2",
    },
  ]);
});

app.post("/createuser", (req, res) => {
  res.status(201).send({
    data: "user created",
  });
});

// app.listen(5000, (req, res) => {
//   console.log("server start");
// });

http.createServer(app).listen(5000);

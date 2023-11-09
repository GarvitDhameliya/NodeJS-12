// const os = require("os");

// console.log(os.hostname());
// console.log(os.platform());

// const fs = require("fs");

// fs.writeFileSync("hello.txt", "my name is garvit");

const http = require("http");
const express = require("express");

const app = express();

// const port = 5000;

// app.get("/", (req, res) => {
//   res.status(200).send("index success");
// });

// app.get("/getuser", (req, res) => {
//   res.status(200).send([
//     {
//       data: "data 1",
//     },
//     {
//       data: "data 2",
//     },
//   ]);
// });

// app.post("/createuser", (req, res) => {
//   res.status(201).send({
//     data: "user created",
//   });
// });

// app.listen(5000, (req, res) => {
//   console.log("server start");
// });

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.value);

  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);

  let sum = num1 + num2;

  res.status(200).send({
    sum: sum,
  });
});

http.createServer(app).listen(5000);

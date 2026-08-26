"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });

  res.end("Ты нереально крут 😎 \n Добро пожаловать в мир IT!");

  // res.end("Welcome to the IT-club, buddy!");

  console.log(req.url);
});

server.listen(3000, "0.0.0.0");

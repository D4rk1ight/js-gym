"use strict";

const http = require("http");

const fs = require("fs");

const server = http.createServer(handleRequest);

server.listen(3000, "0.0.0.0", () => {
  console.log("The server has been started");
});

function handleRequest(req, res) {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });

  res.end("Ты нереально крут 😎 \n Добро пожаловать в мир IT!");

  res.writeHead(200, { "content-type": "image/gif" });

  const steam = fs.createReadStream("./public/cat.gif");

  steam.pipe(res);

  console.log(`request received`);
  // console.log(req.method);
  // console.log(req.url);
  console.log(req.headers);
  // console.log(req.socket.remoteAddress)
}

"use strict";

const http = require("http");

const fs = require("fs");

const server = http.createServer(handleRequest);

server.listen(3000, "0.0.0.0", () => {
  console.log("The server has been started");
});

function handleRequest(req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    const indexPage = fs.createReadStream("./public/index.html");
    indexPage.pipe(res);
    return;
  }
  if (req.url === "/files") {
    getFiles("./public/files");
    return;
  }

  // res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });

  // res.end("Ты нереально крут 😎 \n Добро пожаловать в мир IT!");

  // res.writeHead(200, { "content-type": "image/gif" });

  // const steam = fs.createReadStream("./public/cat.gif");

  // steam.pipe(res);

  console.log(`request received`);
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.headers);
  // console.log(req.socket.remoteAddress)
}

function getFiles(path) {
  fs.readdir(`.${path}`, (error, files) => {
    if (error) {
      console.error(error);
    }
    let linksHtml = "";

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      linksHtml += `<a href=${path}/${file}> ${file}</a>`;
    }

    // files.forEach(file => {
    //   linksHtml += `<a href="${path}/${file}"> ${file} </a>\n`;
    // });

    console.log(linksHtml);
  });
}

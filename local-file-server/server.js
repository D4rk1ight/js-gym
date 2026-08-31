"use strict";

const http = require("http");

const fs = require("fs");
// const { url } = require("inspector");

const server = http.createServer(handleRequest);

server.listen(3000, "0.0.0.0", () => {
  console.log("The server has been started");
});

function handleRequest(req, res) {
  console.log(`request received`);
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    getFiles("./public/files", res);
    return;
  }

  if (req.url.startsWith("/files/")) {
    res.end("test");
    return;
  }
}

function getFiles(path, res) {
  fs.readdir(`${path}`, (error, files) => {
    if (error) {
      console.error(error);
    }
    let linksHtml = "";

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      linksHtml += `<a href="/files/${file}" download> ${file}</a><br>`;
    }
    res.end(linksHtml);

    // files.forEach(file => {
    //   linksHtml += `<a href="${path}/${file}"> ${file} </a>`;
    // });

    // console.log(linksHtml);
  });
}

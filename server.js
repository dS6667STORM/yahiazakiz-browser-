const express = require("express");
const http = require("http");
const wisp = require("wisp-server-node");

const app = express();
const server = http.createServer(app);

// Optional health check
app.get("/", (req, res) => res.send("yahiazakiz Wisp server is alive"));

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Wisp listening on", PORT);
});

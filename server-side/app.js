var express = require("express");
const http = require("http");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const NCIRouter = require("./routes/NCIRouter");

const hostname = "localhost";
const port = process.env.NCI_BACKEND_PORT || 8000;
const app = express();

app.use(cors());
//applying middlewares using use()
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/images", NCIRouter);
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.json({ error: "Use /images to request photos"})
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Backend is running at http://${hostname}:${port}`);
});

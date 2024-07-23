require("dotenv").config();

import http from "http";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import excusesRoutes from "./routes/excuses.router";

const port = 4000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/excuses", excusesRoutes);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});

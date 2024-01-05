const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
require("colors");
const port = 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/leaderBoard", require("./routes/leaderBoardRoutes"));

app.listen(port, () =>
  console.log(`Server running on Port ${port}`.yellow.underline)
);

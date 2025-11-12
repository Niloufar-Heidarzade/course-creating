const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middlewares/logger");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const courseRouter = require("./routes/course.routes");

app.use(cors(), logger, express.json(), express.urlencoded({ extended: true }));

app.use("/course", courseRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 : Route not found</h1>");
});

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`the server is running successfully on port : ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();

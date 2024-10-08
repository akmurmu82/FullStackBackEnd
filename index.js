const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db");
const userRouter = require("./src/routes/userRoute");
const blogRouter = require("./src/routes/blogRoute");
require("dotenv").config();

const server = express();
const uri = process.env.MONGO_URI;
const port = process.env.PORT;

// Middlewares
server.use(express.json());
server.use(cors());

// Routes
server.use("/user", userRouter);
server.use("/blog", blogRouter);

server.get("/", (req, res) => {
  res.send("Welcome to the FullStack Web App.");
});

server.listen(port, async () => {
  try {
    await connectDB(uri);
    console.log("Connected to DB...");
    console.log(`Listening the server on port: ${port}`);
  } catch (error) {
    console.log("error while connecting to DB");
  }
});

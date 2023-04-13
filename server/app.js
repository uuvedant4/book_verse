const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vedant:HBmGjk6P09QTEpJu@cluster0.bsg8csa.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB connected."))
    .then(() => {
      app.listen(5000);
    })
    .catch((err) => console.log(err));
};

connectDB();

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://vedant:lhigDyFGVYZsjAtu@cluster0.bsg8csa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected."))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

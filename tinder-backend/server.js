const express = require("express");
const mongoose = require("mongoose");

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:pIJaF0RGPqC8lZOP@cluster0.b4ups.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) =>
  res.status(200).send("Hello FS developer Vishal Rao!!!")
);

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

// DataBase
// username: admin
// password: pIJaF0RGPqC8lZOP

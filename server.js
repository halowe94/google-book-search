const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes
app.use(routes);

//MongoDB URI
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.listen(PORT, function () {
  console.log(`API server on port' ${PORT}!`);
});

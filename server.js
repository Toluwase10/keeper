//jshint esversion:6

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/notes");
const path = require("path"); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/api", router);

/*  DATABASE SETUP  */
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
const db = mongoose.connection;

//notifies if there is any error with connecting to the DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () => {
  console.log("Successfully connected to the Database.");
});

if (process.env.NODE_ENV === 'production') {           
  app.use(express.static('front-end/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
  });
}


app.listen(PORT, function (req, res) {
    console.log("Server is listening on port " + PORT);
});
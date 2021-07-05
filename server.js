const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/users");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
app.use(bodyParser.json()); //--------------------------------------------------------------middleware

//---------------------------------------------- GET :  RETURN ALL USERS
app.get("/", (req, res) => {
  Blog.find().then((result) => res.send(result));
});
//---------------------------------------------- POST :  ADD A NEW USER TO THE DATABASE
app.post("/", (req, res) => {
  const newblog = new Blog(req.body);
  newblog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//---------------------------------------------- PUT : EDIT A USER BY ID
app.put("/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => res.send(`${result} :Updated`))
    .catch((err) => console.log(err));
});

//---------------------------------------------- DELETE : REMOVE A USER BY ID
app.delete("/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => res.send(`${result} :deleted`))
    .catch((err) => console.log(err));
});

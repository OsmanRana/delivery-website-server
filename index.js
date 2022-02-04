const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

//user: deliveryWebsite
//password: Yecxz585JQjudGWR

//middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://${process.env.DB_USER}:${process.evn.DB_PASS}@cluster0.x13qi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("hitting the database");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello World from express delivery server");
});

app.listen(port, () => {
  console.log("Listening to port ", port);
});

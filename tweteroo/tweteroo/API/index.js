import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tweets = [];
let user = [];

app.post("/sign-up", (req, res) => {
  user.push(req.body);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  console.log(tweets);
  res.send("OK");
});

app.listen(5000);

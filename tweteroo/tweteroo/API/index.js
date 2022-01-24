import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tweets = [];
let users = [];

app.post("/sign-up", (req, res) => {
  users.push(req.body);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  let tweetsRes = [];

  for (let i = tweets.length - 1; i > tweets.length - 11 && i >= 0; i--) {
    const userAvatar = users.find(
      (elem) => elem.username === tweets[i].username
    ).avatar;

    tweetsRes.push({ ...tweets[i], avatar: userAvatar });
  }

  res.send(tweetsRes);
});

app.listen(5000);

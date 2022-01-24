import express from "express";
import cors from "cors";

/* import goodResponse from "./scripts/goodResponse";
import badResponse from "./scripts/badResponse"; */

const app = express();
app.use(cors());
app.use(express.json());

let tweets = [];
let users = [];

app.post("/sign-up", (req, res) => {
  if (req.body.username && req.body.avatar) {
    res.status(201).send("OK");
    users.push(req.body);
  } else {
    res.send("Todos os campos são obrigatórios!");
    res.sendStatus(400);
  }
});

app.post("/tweets", (req, res) => {
  if (req.body.tweet && req.body.username) {
    res.status(201).send("OK");
    tweets.push(req.body);
  } else {
    res.send("Todos os campos são obrigatórios!");
    res.sendStatus(400);
  }
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

app.get("/tweets/:name", (req, res) => {
  const name = req.params.name;
  const userTweets = tweets.filter((elem) => elem.username === name);
  res.send(userTweets);
});

app.listen(5000);

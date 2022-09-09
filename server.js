import "dotenv/config";
import express from 'express';

// deploy heroku
const app = express();

app.use("/", express.static(__dirname + "/build"));

app.lesten(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server is running', process.env.PORT);
  return;
});

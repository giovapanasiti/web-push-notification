const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const subscriptionHandler = require('./handler')

const app = express();

app.use(
  cors()
);

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  console.log("eccolo qua sta funzionando")
  // response.sendFile(__dirname + "/views/index.html");
  response.send('OK')
});

app.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
app.get("/subscription/:id", subscriptionHandler.sendPushNotification);

module.exports = app;
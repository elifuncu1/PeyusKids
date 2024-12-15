const functions = require("firebase-functions");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  app.prepare().then(() => {
    return handle(req, res);
  }).catch((err) => {
    console.error("Error during request handling", err);
    res.status(500).send("Internal Server Error");
  });
});

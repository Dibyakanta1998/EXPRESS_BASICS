const express = require("express");
require('express-async-errors');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { MONGODB_URL } = require("./config");
const Routers = require("./routes");
const { logErrors,errorHandler, notFoundError } = require("./middlewares/error.middleware");
const app = express();
const port = 4000;

const mongoDbUri = MONGODB_URL;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

mongoose
  .connect(mongoDbUri, { autoIndex: false })
  .then(() => {
    console.log("connected to db", mongoDbUri);
  })
  .catch((e) => {
    console.log("@@@@ error in connect", e);
  });


Routers.forEach(({ path, router }) => {
  app.use(path, router);
});


app.use(notFoundError)
app.use(logErrors)
app.use(errorHandler)

app.listen(port, () => console.log(`Express app running on port ${port}!`));

//todo sendResponse errorHandling midleWares cookies jwt encrypt decrypt(req,resp)
const router = require("express").Router();
const { signup } = require("../controllers");

router.post("/", signup);

module.exports = {
  path: "/signup",
  router,
};

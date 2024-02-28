const router = require("express").Router();
const {signin}=require('../controllers')

router.post("/",signin);

module.exports = {
  path: "/signin",
  router,
};
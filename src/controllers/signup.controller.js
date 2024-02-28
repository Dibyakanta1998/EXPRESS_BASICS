const User = require("../models/user.model");

const signup = async (req, res) => {
  const { body } = req;
  if (await User.isEmailTaken(body.email)) {
    throw Error("Email is already taken");
  }

  await User.create(body);

};

module.exports = {
  signup,
};

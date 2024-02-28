const User = require("../models/user.model");
const { validateEncryptedData } = require("../utils/encryptionUtils");

const signin = async (req, res, next) => {
  const { body } = req;
  const { email, enc_password } = body || {};
  if (!enc_password || !email)
    throw new Error("Please provide both email and password");

  const data = await User.findOne({ email });
  if (!data) throw new Error("Please provide correct email");

  const isValid = await validateEncryptedData(enc_password, data?.enc_password);
  if (!isValid) throw new Error("Please provide correct password");

  return { data };
  // res.json({message: "success" ,data });
};

module.exports = {
  signin,
};

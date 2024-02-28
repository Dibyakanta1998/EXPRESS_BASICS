const mongoose = require("mongoose");
const { Schema } = mongoose;
const { encryptData } = require("../utils/encryptionUtils");

const schema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  enc_password: String,
});

schema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("enc_password")) {
    user.enc_password =await encryptData(user.enc_password);
  }
  next();
});

schema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const User = mongoose.model("User", schema);

module.exports = User;

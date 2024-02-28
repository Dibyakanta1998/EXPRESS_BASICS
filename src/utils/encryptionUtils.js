const bcrypt = require("bcryptjs")

const encryptData = async (data, salt = 8) => {
  const hashedData =await bcrypt.hash(data, salt);
  console.log("🚀 ~ encryptData ~ hashedData:", hashedData);
  return hashedData;
};

const validateEncryptedData =async (data, hashedData) => {
  const isValid =await bcrypt.compare(data, hashedData);
  console.log("🚀 ~ validateEncryptedData ~ isValid:", isValid);

  return isValid;
};

module.exports = {
  encryptData,
  validateEncryptedData,
};

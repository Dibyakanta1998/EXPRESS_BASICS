const signInControllers = require("../controllers/signin.controller");
const signUpControllers = require("../controllers/signup.controller");
const { handleResponse } = require("../utils/sendResponse");

const commonControllers = {
  ...signInControllers,
  ...signUpControllers,
};

const customControllers = {};

for (const key in commonControllers) {
  commonControllers[key] = handleResponse(commonControllers[key]);
}

const combineControllers = {
  ...commonControllers,
};
module.exports = {
  ...combineControllers,
  ...customControllers,
};

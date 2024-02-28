function sendResponse(req, res, data) {
  if (data) {
    res.status(200).json({ message: "success", data });
  } else {
    res.status(200).json({ message: "success" });
  }
}

function handleResponse(func) {
  return async (req, resp,next) => {
    if (typeof func == "function") {
      const result = await func(req,resp,next);
      sendResponse(req, resp, result);
    }
  };
}

module.exports = {
  sendResponse,
  handleResponse
};

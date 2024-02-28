const NotFoundError = require("../errors/NotFoundError.error")

function logErrors (err, req, res, next) {
    next(err)
  }


  function errorHandler (err, req, res, next) {
    console.log("🚀 ~ errorHandler ~ err:", err.message,err.statusCode)
    const statusCode=err.statusCode || 500
    res.status(statusCode).json({error:err.message})
  }

  
  function notFoundError ( req, res, next) {
    console.log("🚀 ~NotFoundError:")
    return next(new NotFoundError());
  }



  module.exports={
    logErrors,
    errorHandler,
    notFoundError
  }


//   export const throwError = ({ errorMsg, statusCode }) => {
//     const err = {
//       code: statusCode || 500,
//       msg: errorMsg || "Something went wrong!"
//     };
//     throw new Error(JSON.stringify(err));
//   };
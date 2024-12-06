const AppError = require("../utils/AppError")

module.exports = (err,req,res,next)=>{
  
    err.status = err.status || 'fail',
    err.statusCode = err.statusCode || 500
  
    res.status(err.statusCode).json({
      status: err.status,
      message : err.message
    })
  }


  const handleJWTError = err =>{
    new AppError('Invalid Token! Please login again',401)
  }

// const AppError = require("./../utils/AppError")

// const handleCastErrorDB = err =>{
//   const message = `Invalid ${err.path}: ${err.value}`;
//   return new AppError(message, 400)
// };


// const handleDuplicateFieldDB = err =>{
//   const value = err.errmsg.match(/(['"])(\\?.)*\1/)[0];

//const message = `Duplicate field value: ${value}. Please use another value`;
// }




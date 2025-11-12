const logger = (req , res , next) => {
  console.log(`API call method is ${req.method} on route ${req.url}`);
  next();
}

module.exports = logger;
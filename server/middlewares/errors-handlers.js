const logError = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const sendError = (err, req, res, next) => {
  if(err) res.status(err.statusCode || 500).send(err.message);
};

module.exports = {
  logError,
  sendError,
};

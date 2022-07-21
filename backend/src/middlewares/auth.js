const { decodeJwt } = require("../helpers/jwtHelper");

const authorization = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const data = decodeJwt(token);
    console.error(data);
    req.adminId = data.id;
    req.username = data.username;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = authorization;

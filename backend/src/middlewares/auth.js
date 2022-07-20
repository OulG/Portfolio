const { decodeJWT } = require("../helpers/jwtHelper");

const authorization = (req, res, next) => {
  const { token } = req.cookies;
  console.error(req);

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const data = decodeJWT(token);
    req.adminId = data.id;
    req.username = data.username;
    return next();
  } catch {
    return res.status(401).send("Prout");
  }
};

module.exports = authorization;

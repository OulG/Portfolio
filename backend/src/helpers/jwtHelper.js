const jwt = require("jsonwebtoken");

const encodeJwt = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" });
};

const decodeJwt = (token) => {
  return jwt.decode(token, process.env.TOKEN_SECRET);
};

module.exports = { encodeJwt, decodeJwt };

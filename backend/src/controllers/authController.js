const adminDataAccess = require("../models/adminDataAccess");
const { verifyPassword } = require("../helpers/argonHelper");
const { encodeJwt } = require("../helpers/jwtHelper");

exports.login = (req, res) => {
  const { username, email, password } = req.body;

  adminDataAccess.findByUserEmail(email).then((user) => {
    console.error(user);
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    return verifyPassword(password, user[0].password_hash).then(
      (verification) => {
        if (verification) {
          const userAnswer = user[0];
          const token = encodeJwt(userAnswer);
          res.cookie("token", token, { httpOnly: true, secure: false });
          res.status(200).send(`Great, ${username} is login`);
        } else {
          res.status(401).send("Invalid credentials");
        }
      }
    );
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token").sendStatus(200);
};

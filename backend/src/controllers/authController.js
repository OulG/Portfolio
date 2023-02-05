const adminDataAccess = require("../models/adminDataAccess");
const { verifyPassword } = require("../helpers/argonHelper");
const { encodeJwt } = require("../helpers/jwtHelper");

exports.login = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await adminDataAccess.findByUserEmail(email);
    res.send(user);
    if (!user) {
      res.status(401).send("Invalid credentials");
    } else {
      const verification = await verifyPassword(
        password,
        user[0].password_hash
      );
      if (verification) {
        const userAnswer = user[0];
        const token = encodeJwt(userAnswer);
        res.cookie("token", token, { httpOnly: true, secure: false });
        res.status(200).send(`Great, ${username} is login`);
      } else {
        res.status(401).send("Invalid credentials");
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token").sendStatus(200);
};

const adminDataAccess = require("../models/adminDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.getAll = (req, res) => {
  adminDataAccess
    .findAll()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  adminDataAccess
    .findOne(userId)
    .then((user) => {
      if (user.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(user);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.addOne = (req, res) => {
  const { username, email, password } = req.body;

  hashPassword(password)
    .then((hash) => {
      console.error(hash);
      adminDataAccess
        .create({
          username,
          email,
          hash,
        })
        .then((newUser) => console.error(newUser))
        .then(() => res.status(201).json({ username }))
        .catch((err) => {
          res.status(500).send({ err });
        });
    })
    .catch((err) => res.status(500).send({ err }));
};

exports.updateOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { username, email, password } = req.body;

  if (password) {
    hashPassword(password)
      .then((hash) => {
        adminDataAccess
          .update(userId, { username, email, password_hash: hash })
          .then((info) => console.error(info))
          .then(() => res.status(201).send("Great Lou!"))
          .catch((err) => res.status(300).send({ err }));
      })
      .catch((err) => res.status(500).send({ err }));
  } else {
    adminDataAccess
      .modifyOne(userId, { ...req.body })
      .then((info) => console.error(info))
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(300).send({ err }));
  }
};

exports.deleteOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  adminDataAccess
    .destroy(userId)
    .then((deleteUser) => res.send(deleteUser))
    .catch((err) => res.status(500).send(err));
};

const userDataAccess = require("../models/userDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.getAll = async (req, res, next) => {
  try {
    const users = await userDataAccess.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
};

exports.addOne = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hash = await hashPassword(password);
    await userDataAccess.create({
      username,
      email,
      hash,
    });
    res.status(201).json({ username });
  } catch (error) {
    next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const { username, email, password } = req.body;
  try {
    if (password) {
      const hash = await hashPassword(password);
      const user = await userDataAccess.update(userId, {
        username,
        email,
        password_hash: hash,
      });
      res.send(user);
    } else {
      const user = await userDataAccess.update(userId, { ...req.body });
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const deleteUser = await userDataAccess.destroy(userId);
    res.send(deleteUser);
  } catch (error) {
    next(error);
  }
};

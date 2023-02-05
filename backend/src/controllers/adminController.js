const adminDataAccess = require("../models/adminDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.getAll = async (req, res, next) => {
  try {
    const users = await adminDataAccess.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const user = await adminDataAccess.findOne(userId);
    if (user.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
};

exports.addOne = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hash = await hashPassword(password);
    await adminDataAccess.create({
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
      const user = await adminDataAccess.update(userId, {
        username,
        email,
        password_hash: hash,
      });
      res.send(user);
    } else {
      const user = await adminDataAccess.update(userId, { ...req.body });
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const deleteUser = await adminDataAccess.destroy(userId);
    res.send(deleteUser);
  } catch (error) {
    next(error);
  }
};

const connection = require("../../db-config");

const db = connection.promise();

const findAll = () => {
  return db.query("SELECT * FROM user").then(([results]) => results);
};

const findOne = (id) => {
  return db
    .query("SELECT * FROM user WHERE id = ?", [id])
    .then(([results]) => results[0]);
};

const findByUserEmail = (email) => {
  return db
    .query(`SELECT * FROM user WHERE email = ?`, [email])
    .then((result) => result[0]);
};

const create = ({ username, email, hash }) => {
  return db
    .query(
      "INSERT INTO user (username, email, password_hash) VALUES (?, ?, ?)",
      [username, email, hash]
    )
    .then(([result]) => {
      const id = result.insertId;
      return { id, username };
    });
};

const update = (id, newAttributes) => {
  return db.query("UPDATE user SET ? WHERE id = ?", [newAttributes, id]);
};

const destroy = (id) => {
  return db
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([result]) => result.affectedRows !== 0);
};

module.exports = { findAll, findOne, create, update, destroy, findByUserEmail };

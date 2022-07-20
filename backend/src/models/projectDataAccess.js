const connection = require("../../db-config");

const db = connection.promise();

const findAll = () => {
  return db.query("SELECT * FROM project").then(([results]) => results);
};

const findOne = (id) => {
  return db
    .query("SELECT * FROM project WHERE id = ?", [id])
    .then(([results]) => results[0]);
};

const create = ({ title, description, picture, link }) => {
  return db
    .query(
      "INSERT INTO project (title, description, picture, link) VALUES (?, ?, ?, ?)",
      [title, description, picture, link]
    )
    .then(([result]) => {
      const id = result.insertId;
      return { id, title };
    });
};

const update = (id, newAttributes) => {
  return db.query("UPDATE project SET ? WHERE id = ?", [newAttributes, id]);
};

const destroy = (id) => {
  return db
    .query("DELETE FROM project WHERE id = ?", [id])
    .then(([result]) => result.affectedRows !== 0);
};

module.exports = { findAll, findOne, create, update, destroy };

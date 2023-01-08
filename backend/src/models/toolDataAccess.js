const connection = require("../../db-config");

const db = connection.promise();

const findAll = () => {
  return db.query("SELECT * FROM tool").then(([results]) => results);
};

const findOne = (id) => {
  return db
    .query("SELECT * FROM tool WHERE id = ?", [id])
    .then(([results]) => results[0]);
};

const create = ({ name }) => {
  return db
    .query("INSERT INTO tool (name) VALUES (?)", [name])
    .then(([result]) => {
      const id = result.insertId;
      return { id, name };
    });
};

const update = (id, updateTool) => {
  return db.query("UPDATE tool SET ? WHERE id = ?", [updateTool, id]);
};

const destroy = (id) => {
  return db
    .query("DELETE FROM tool WHERE id = ?", [id])
    .then(([result]) => result.affectedRows !== 0);
};

module.exports = { findAll, findOne, create, update, destroy };

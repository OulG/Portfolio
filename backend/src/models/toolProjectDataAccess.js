const connection = require("../../db-config");

const db = connection.promise();

const findAll = () => {
  return db
    .query("SELECT * FROM project_has_tools")
    .then(([results]) => results);
};

const findOne = (projectId) => {
  return db
    .query("SELECT * FROM project_has_tools WHERE project_Id = ?", [projectId])
    .then(([results]) => results);
};

module.exports = { findAll, findOne };

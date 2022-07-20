const connection = require("../../db-config");

const db = connection.promise();

const create = (projectId, toolId) => {
  return db
    .query(
      "INSERT INTO project_has_tools (project_Id, tool_Id) VALUES (?, ?)",
      [projectId, toolId]
    )
    .then(([result]) => {
      return result;
    });
};

const update = (toolId) => {
  return db.query("UPDATE project_has_tools SET ? WHERE project_id = ?", [
    toolId,
  ]);
};

module.exports = { create, update };

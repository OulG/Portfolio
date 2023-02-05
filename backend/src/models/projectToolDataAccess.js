const connection = require("../../db-config");

const db = connection.promise();

const findAll = () => {
  return db
    .query("SELECT * FROM project_has_tools")
    .then(([results]) => results);
};

const findByProject = (projectId) => {
  return db
    .query(
      "SELECT tool.* FROM project_has_tools INNER JOIN tool ON tool.id = project_has_tools.tool_id WHERE project_Id = ?",
      [projectId]
    )
    .then(([results]) => results);
};

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

const update = (projectId, toolId) => {
  return db.query("UPDATE project_has_tools SET ? WHERE project_id = ?", [
    projectId,
    toolId,
  ]);
};

const deleteByProjectId = (projectId) => {
  return db.query("DELETE FROM project_has_tools WHERE project_id = ?", [
    projectId,
  ]);
};

module.exports = { create, update, findAll, findByProject, deleteByProjectId };

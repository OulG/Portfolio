const toolProjectDataAccess = require("../models/projectToolDataAccess");

exports.getAll = (req, res) => {
  toolProjectDataAccess
    .findAll()
    .then((tools) => res.send(tools))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);

  toolProjectDataAccess
    .findByProject(projectId)
    .then((tool) => {
      if (tool.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(tool);
      }
    })
    .catch((err) => res.status(500).send(err));
};

const toolProjectDataAccess = require("../models/projectToolDataAccess");

exports.getAll = async (req, res, next) => {
  try {
    const tools = await toolProjectDataAccess.findAll();
    res.send(tools);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  const projectId = parseInt(req.params.projectId, 10);

  try {
    const tool = await toolProjectDataAccess.findByProject(projectId);
    if (tool.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(tool);
    }
  } catch (error) {
    next(error);
  }
};

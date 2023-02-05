const toolDataAccess = require("../models/toolDataAccess");

exports.getAll = async (req, res, next) => {
  try {
    const tools = await toolDataAccess.findAll();
    res.send(tools);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    res.send(req.tool);
  } catch (error) {
    next(error);
  }
};

exports.addOne = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newTool = await toolDataAccess.create({
      name,
    });
    res.status(201).send(newTool);
  } catch (error) {
    next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  const toolId = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    await toolDataAccess.update(toolId, { name });
    res.status(201).send({ name });
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  const toolId = parseInt(req.params.id, 10);
  try {
    const deleteTool = await toolDataAccess.destroy(toolId);
    res.send(deleteTool);
  } catch (error) {
    next(error);
  }
};

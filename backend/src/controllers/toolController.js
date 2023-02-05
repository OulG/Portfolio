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
  const toolId = parseInt(req.params.id, 10);

  try {
    const tool = await toolDataAccess.findOne(toolId);
    if (tool.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(tool);
    }
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
    const tool = await toolDataAccess.findOne(toolId);
    if (!tool) {
      res.status(404).json({ Erreur: "Aucun outil trouvé" });
    } else {
      const updatedTool = await toolDataAccess.update(toolId, { name });
      res.status(201).send(updatedTool);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  const toolId = parseInt(req.params.id, 10);
  try {
    const tool = await toolDataAccess.findOne(toolId);
    if (!tool) {
      res.status(404).json({ Erreur: "Aucun outil trouvé" });
    } else {
      const deleteTool = await toolDataAccess.destroy(toolId);
      res.send(deleteTool);
    }
  } catch (error) {
    next(error);
  }
};

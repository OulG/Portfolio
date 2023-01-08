const toolDataAccess = require("../models/toolDataAccess");

exports.getAll = (req, res) => {
  toolDataAccess
    .findAll()
    .then((tools) => res.send(tools))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const toolId = parseInt(req.params.id, 10);

  toolDataAccess
    .findOne(toolId)
    .then((tool) => {
      if (tool.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(tool);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.addOne = (req, res) => {
  const { name } = req.body;

  toolDataAccess
    .create({
      name,
    })
    .then((newTool) => console.error(newTool))
    .then(() => res.status(201).json({ name }))
    .catch((err) => {
      res.status(500).send({ err });
    });
};

exports.updateOne = async (req, res) => {
  const toolId = parseInt(req.params.id, 10);
  const { name } = req.body;

  const tool = await toolDataAccess.findOne(toolId);

  if (!tool) {
    return res.status(404).json({ Erreur: "Aucun outil trouvé" });
  }
  return toolDataAccess
    .update(toolId, { name })
    .then((updatedTool) => {
      console.error(updatedTool);
    })
    .then(() => res.status(201).json({ name }))
    .catch((err) => res.status(300).send({ err }));
};

exports.deleteOne = async (req, res) => {
  const toolId = parseInt(req.params.id, 10);

  const tool = await toolDataAccess.findOne(toolId);

  if (!tool) {
    return res.status(404).json({ Erreur: "Aucun outil trouvé" });
  }
  return toolDataAccess
    .destroy(toolId)
    .then((deleteTool) => res.send(deleteTool))
    .catch((err) => res.status(500).send(err));
};

const projectDataAccess = require("../models/projectDataAccess");
const projectToolDataAccess = require("../models/projectToolDataAccess");

exports.getAll = async (req, res, next) => {
  try {
    const projects = await projectDataAccess.findAll();

    res.send(projects);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.id, 10);

    const project = await projectDataAccess.findOne(projectId);

    if (project.length === 0) {
      res.sendStatus(404);
    } else {
      const projectTools = await projectToolDataAccess.findByProject(projectId);
      project.tools = projectTools;
      res.send(project);
    }
  } catch (error) {
    next(error);
  }
};

exports.addOne = async (req, res, next) => {
  const { title, description, picture, link, projectTools } = req.body;

  try {
    const newProject = await projectDataAccess.create({
      title,
      description,
      picture,
      link,
    });
    // Pour chaque tool, je fais une requête qui vient lié l'Id du project & l'Id du tool.
    const request = projectTools.map((toolId) => {
      return projectToolDataAccess.create(newProject.id, toolId);
    });
    await Promise.all(request);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  const projectId = parseInt(req.params.id, 10);
  const { title, description, picture, link, projectTools } = req.body;
  try {
    await projectDataAccess.update(projectId, {
      title,
      description,
      picture,
      link,
    });
    projectToolDataAccess.deleteByProjectId(projectId);
    const request = projectTools.map((toolId) => {
      return projectToolDataAccess.create(projectId, toolId);
    });
    await Promise.all(request);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  const projectId = parseInt(req.params.id, 10);
  try {
    await projectDataAccess.destroy(projectId);
  } catch (error) {
    next(error);
  }
};

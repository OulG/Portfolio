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
    const { project } = req;
    const projectTools = await projectToolDataAccess.findByProject(project.id);
    project.tools = projectTools;
    res.send(project);
  } catch (error) {
    next(error);
  }
};

exports.addOne = async (req, res, next) => {
  const { title, description, link, projectTools } = req.body;

  try {
    const newProject = await projectDataAccess.create({
      title,
      description,
      picture: `assets/images/${req.file.filename}`,
      link,
    });
    if (projectTools) {
      // Pour chaque tool, je fais une requête qui vient lié l'Id du project & l'Id du tool.
      const request = projectTools.map((toolId) => {
        return projectToolDataAccess.create(newProject.id, toolId);
      });
      await Promise.all(request);
    }
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
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

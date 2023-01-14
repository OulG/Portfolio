const projectDataAccess = require("../models/projectDataAccess");
const projectToolDataAccess = require("../models/projectToolDataAccess");

exports.getAll = async (req, res) => {
  try {
    const projects = await projectDataAccess.findAll();

    res.send(projects);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getOne = async (req, res) => {
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
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addOne = (req, res) => {
  const { title, description, picture, link, projectTools } = req.body;

  projectDataAccess
    .create({
      title,
      description,
      picture,
      link,
    })
    .then((newProject) => {
      console.error(newProject);
      // Pour chaque tool, je fais une requête qui vient lié l'Id du project & l'Id du tool.
      const request = projectTools.map((toolId) => {
        return projectToolDataAccess.create(newProject.id, toolId);
      });
      Promise.all(request)
        .then(() => {
          res.status(201).send("Good job Lou!");
        })
        .catch((err) => {
          res.status(500).send({ err });
        });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
};

exports.updateOne = (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  const { title, description, picture, link, projectTools } = req.body;

  projectDataAccess
    .update(projectId, { title, description, picture, link })
    .then((updateProject) => {
      console.error(updateProject);
      // Pour chaque tool, je fais une requête qui vient lié l'Id du project & l'Id du tool.
      const request = projectTools.map((toolId) => {
        return projectToolDataAccess.update(updateProject.id, toolId);
      });
      Promise.all(request)
        .then(() => {
          res.status(201).send("Good job Lou!");
        })
        .catch((err) => {
          res.status(500).send({ err });
        });
    })
    .then(() => res.status(201).json("You'r really good"))
    .catch((err) => res.status(300).send({ err }));
};

exports.deleteOne = (req, res) => {
  const projectId = parseInt(req.params.id, 10);

  projectDataAccess
    .destroy(projectId)
    .then((deleteProject) => res.send(deleteProject))
    .catch((err) => res.status(500).send(err));
};

const projectDataAccess = require("../models/projectDataAccess");

exports.getAll = (req, res) => {
  projectDataAccess
    .findAll()
    .then((projects) => res.send(projects))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const projectId = parseInt(req.params.id, 10);

  projectDataAccess
    .findOne(projectId)
    .then((project) => {
      if (project.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(project);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.addOne = (req, res) => {
  const { title, description, picture, link } = req.body;

  projectDataAccess
    .create({
      title,
      description,
      picture,
      link,
    })
    .then((newProject) => console.error(newProject))
    .then(() => res.status(201).send("Good job Lou!"))
    .catch((err) => {
      res.status(500).send({ err });
    });
};

exports.updateOne = (req, res) => {
  const projectId = parseInt(req.params.id, 10);

  projectDataAccess
    .update(projectId, { ...req.body })
    .then((info) => console.error(info))
    .then(() => res.status(201).json("You'r really good"))
    .catch((err) => res.status(300).send({ err }));
};

exports.deleteOne = (req, res) => {
  const projectId = parseInt(req.params.id, 10);

  projectDataAccess
    .destroy(projectId)
    .then((deleteUser) => res.send(deleteUser))
    .catch((err) => res.status(500).send(err));
};

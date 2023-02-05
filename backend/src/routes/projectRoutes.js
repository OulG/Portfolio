const express = require("express");
const projectDataAccess = require("../models/projectDataAccess");
const projectController = require("../controllers/projectController");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");

const router = express.Router();
router.use("/:id", async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.id, 10);

    const project = await projectDataAccess.findOne(projectId);

    if (!project) {
      res.status(404).send("Project not found");
    } else {
      req.project = project;
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", projectController.getAll);
router.get("/:id", projectController.getOne);
router.post("/", auth, multer, projectController.addOne);
router.put("/:id", auth, projectController.updateOne);
router.delete("/:id", auth, projectController.deleteOne);

module.exports = router;

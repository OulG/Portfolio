const express = require("express");

const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/", projectController.getAll);
router.get("/:id", projectController.getOne);
router.post("/", projectController.addOne);
router.put("/:id", projectController.updateOne);
router.delete("/:id", projectController.deleteOne);

module.exports = router;

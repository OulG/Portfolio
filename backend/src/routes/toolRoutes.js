const express = require("express");

const toolDataAccess = require("../models/toolDataAccess");
const toolController = require("../controllers/toolController");
const auth = require("../middlewares/auth");

const router = express.Router();
router.use("/:id", async (req, res, next) => {
  try {
    const toolId = parseInt(req.params.id, 10);

    const tool = await toolDataAccess.findOne(toolId);

    if (!tool) {
      res.status(404).send("Tool not found");
    } else {
      req.tool = tool;
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", toolController.getAll);
router.get("/:id", toolController.getOne);
router.post("/", auth, toolController.addOne);
router.put("/:id", auth, toolController.updateOne);
router.delete("/:id", auth, toolController.deleteOne);

module.exports = router;

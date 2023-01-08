const express = require("express");

const toolProjectController = require("../controllers/toolProjectController");

const router = express.Router();

router.get("/", toolProjectController.getAll);
router.get("/:projectId", toolProjectController.getOne);

module.exports = router;

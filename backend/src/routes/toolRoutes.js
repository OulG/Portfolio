const express = require("express");

const toolController = require("../controllers/toolController");

const router = express.Router();

router.get("/", toolController.getAll);
router.get("/:id", toolController.getOne);
router.post("/", toolController.addOne);
router.put("/:id", toolController.updateOne);
router.delete("/:id", toolController.deleteOne);

module.exports = router;

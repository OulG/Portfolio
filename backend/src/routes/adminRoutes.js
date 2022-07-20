const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/", adminController.getAll);
router.get("/:id", adminController.getOne);
router.post("/", adminController.addOne);
router.put("/:id", adminController.updateOne);
router.delete("/:id", adminController.deleteOne);

module.exports = router;

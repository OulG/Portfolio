const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

const multer = require("../middlewares/multer");

router.get("/", adminController.getAll);
router.get("/:id", adminController.getOne);
router.post("/", multer, adminController.addOne);
router.put("/:id", multer, adminController.updateOne);
router.delete("/:id", adminController.deleteOne);

module.exports = router;

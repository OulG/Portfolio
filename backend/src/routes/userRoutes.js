const express = require("express");
const userDataAccess = require("../models/userDataAccess");
const auth = require("../middlewares/auth");

const userController = require("../controllers/userController");

const router = express.Router();
router.use("/:id", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id, 10);

    const user = await userDataAccess.findOne(userId);

    if (!user) {
      res.status(404).send("User not found");
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    next(error);
  }
});

const multer = require("../middlewares/multer");

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.post("/", auth, multer, userController.addOne);
router.put("/:id", auth, multer, userController.updateOne);
router.delete("/:id", auth, userController.deleteOne);

module.exports = router;

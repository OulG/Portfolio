const express = require("express");
const AuthController = require("../controllers/authController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/login", AuthController.login);
router.get("/logout", auth, AuthController.logout);

module.exports = router;

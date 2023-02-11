const express = require("express");

const {
  registerUser,
  loginUser,
  logout,
  getUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);

module.exports = router;

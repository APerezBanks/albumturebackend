const { Router } = require("express");
const { addUser, login, updateUser, deleteUser } = require("./userControllers");
const { hashPass, decryptPass, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", decryptPass, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", checkToken, hashPass, updateUser);
userRouter.delete("/user/:username", checkToken, deleteUser);

module.exports = userRouter;
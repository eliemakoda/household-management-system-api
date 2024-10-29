const {
  GetAllUsers,
  GetPasswordHash,
  CreateNewuser,
  DeleteUSerById,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
} = require("../views");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/allusers", GetAllUsers);
userRouter.get("/userbyId/:userId", GetUserById);
userRouter.get("/userByEmail/:Email", GetUserByEmail);

userRouter.post("/hashpassword", GetPasswordHash);
userRouter.post("/addUser", CreateNewuser);

userRouter.put("/updateUSer/:userId", UpdateUser);

userRouter.delete("/rmUser/:userId", DeleteUSerById);

module.exports = userRouter;

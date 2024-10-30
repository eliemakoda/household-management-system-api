const userRouter = require("../routers/user.router");
const helmet = require("helmet");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { GetUserByEMail } = require("../models");
const { verifyPassword } = require("../../utils");
const CollectionHistory = require("../routers/collectHistory.router");
const CommandRouter = require("../routers/command.router");
const HouseHoldRouter = require("../routers/household.router");
const LocationRouter = require("../routers/location.router");
const NotificationRouter = require("../routers/notification.router");
require("dotenv").config(); // loading virtual environment configurations

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Brute Force Attack Prevention
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 144,
  message: {
    error:
      "You've used all your requests for the day! Try again tomorrow! Goodbye!",
  },
});
app.use(limiter);


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await GetUserByEMail(email);

  if (!user) {
    return res.status(404).send({ msg: "No user found with the specified email." });
  }

  const isPasswordVerified = await verifyPassword(password, user.motDePasse);
  if (isPasswordVerified) {
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.statut },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log(token)
    return res.status(200).send({ token });
  }

  return res.status(401).json({ msg: "Invalid password. Please try again." });
});

const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ msg: "Missing JWT token in your request." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        msg: "Cannot authenticate the token you provided.",
      });
    }
    req.user = user;
    next();
  });
};


app.use(CommandRouter);

const AgentMiddleware = async (req, res, next) => {
  const user = req.user;
  console.log(user);
  const role = user.role;
  if (role === "AGENT") {
    return res.status(401).send({
      msg: "You don't  permission ",
    });
  }
  next();
};


app.use(authenticateJWT);
app.use(AgentMiddleware)
app.use(userRouter);

const UserMiddleware = async (req, res, next) => {
  const user = req.user;
  console.log(user);
  const role = user.role;
  if (role === "USER") {
    return res.status(401).send({
      msg: "You don't  permission ",
    });
  }
  next();
};
app.use(UserMiddleware)
app.use(CollectionHistory);
app.use(HouseHoldRouter);
app.use(LocationRouter);
app.use(NotificationRouter);

module.exports = app;

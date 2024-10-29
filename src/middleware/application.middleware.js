const userRouter = require("../routers/user.router");
const helmet = require("helmet");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { GetUserByEMail } = require("../models");
const { verifyPassword } = require("../../utils");
const COllectionHistory = require("../routers/collectHistory.router");
const CommandRouter = require("../routers/command.router");
const HouseHoldRouter = require("../routers/household.router");
const LocationRouter = require("../routers/location.router");
const NotificationRouter= require("../routers/notification.router")
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
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Content-Security-Policy", "default-src 'self'");

  next();
});

// Brute Force Attack Prevention
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 14,
  message: {
    error:
      "You've used all your requests for the day! Try again tomorrow! Goodbye!",
  },
});
app.use(limiter);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await GetUserByEMail(email);
  if (user === 2) {
    return res
      .status(401)
      .send({ msg: "No user found with the specified Email " });
  }
  //   console.log(req.body)
  //   console.log(user)
  const isPasswordVerified = await verifyPassword(password, user.motDePasse);
  if (user && isPasswordVerified) {
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.statut },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res.status(200).send({ token });
  }
  return res
    .status(401)
    .json({ msg: "Invalid Password please Try Again later" });
});

const authenticateJWT = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ msg: "Missing Jwt Token in your Request" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        msg: "Cannot authenticate the token you passed to the request!",
      });
    }
    req.user = user;
    next();
  });
};
app.use(authenticateJWT);

app.use(userRouter);
app.use(COllectionHistory);
app.use(CommandRouter);
app.use(HouseHoldRouter);
app.use(LocationRouter);
app.use(NotificationRouter)

module.exports = app;

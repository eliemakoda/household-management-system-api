const express = require("express");
const {
  GetAllHouseHold,
  GethouseHoldById,
  DeletehouseHoldById,
  CreateHouseHold,
  CreateManyHouseHold,
  UpdateHouseHold,
} = require("../views");

const HouseHoldRouter = express.Router();

HouseHoldRouter.get("/allHouseHold", GetAllHouseHold);
HouseHoldRouter.get("/HouseHold/:idhouse", GethouseHoldById);
HouseHoldRouter.delete("/rmHouseHold/:idhouse", DeletehouseHoldById);
HouseHoldRouter.post("/createHouseHold", CreateHouseHold);
HouseHoldRouter.post("/createManyhousehold", CreateManyHouseHold);
HouseHoldRouter.put("/updateHouseHold/:idhouse", UpdateHouseHold);

module.exports = HouseHoldRouter;

const express = require("express");
const {
  GetAgentWithId,
  GetallLocations,
  GetLocationById,
  UpdateLocation,
  InsertAlocationToDb,
  InsertManylocationToDb,
} = require("../views");
const { GetAllLocation } = require("../models");

const LocationRouter = express.Router();
LocationRouter.get("/agenWithId/:agentId", GetAgentWithId);
LocationRouter.get("/allLocations", GetallLocations);
LocationRouter.get("/locationWithId/:idloc", GetLocationById);
LocationRouter.post("/addLocation", InsertAlocationToDb);
LocationRouter.post("/addManyLocation", InsertManylocationToDb);
LocationRouter.put("/updateLocation/:idloc", UpdateLocation);
module.exports = LocationRouter;

const {
  UpdateLocation,
  GetAllLocation,
  GetAnAgentLocation,
  GetLocationById,
  CreateManyLocationWithAgent,
  CreateLocationWithAgent,
} = require("../../models");
const AddManyLocationToDb = async (data, agentIds) => {
  const response = await CreateManyLocationWithAgent(data, agentIds);
  return response;
};
const AddLocationToDb = async (data, agentIds) => {
  const response = await CreateLocationWithAgent(data, agentIds);
  return response;
};
const SetUpdateLocation = async (idloc, data) => {
  const parseid = parseInt(idloc, 10);
  if (!parseid) {
    return 2;
  }
  const response = await UpdateLocation(parseid, data);
  return response;
};
const ReturnLocationWithId = async (idLoc) => {
  const parseLocId = parseInt(idLoc, 10);
  if (!parseLocId) {
    return 2;
  }

  const response = await GetLocationById(parseLocId);
  return response;
};
const ReturnAllLoc = async () => {
  const responses = await GetAllLocation();
  return responses;
};
const returnAgentLocation = async (agentId) => {
  const parseAgentId = parseInt(agentId, 10);
  const response = await GetAnAgentLocation(parseAgentId);
  return response;
};

module.exports={
    returnAgentLocation,
    ReturnAllLoc,
    ReturnLocationWithId,
    SetUpdateLocation,
    AddLocationToDb,
    AddManyLocationToDb
}
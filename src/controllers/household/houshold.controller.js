const {
  UpdateHouseHold,
  CreateManyHouseHold,
  CreatHouseHold,
  DeleteHouseHold,
  GetHouseHoldById,
  GetAllHouseHold,
} = require("../../models");

const ReturnAllHouseHold = async () => {
  const response = await GetAllHouseHold();
  return response;
};
const ReturnHouseHoldWithId = async (idh) => {
  const parseId = parseInt(idh);
  if (!parseId) {
    return 2;
  }
  const response = await GetHouseHoldById(parseId);
  return response;
};
const DeleteHousHoldFromDb = async (idHouseHold) => {
  const parseId = parseInt(idHouseHold, 10);
  const response = await DeleteHouseHold(parseId);
  return response;
};
const AddManyHouseHoldToDb = async (HouseHolddata) => {
  const responses = await CreateManyHouseHold(HouseHolddata);
  return responses;
};
const AddHouseHoldToDb = async (HouseHolddata) => {
  const responses = await CreatHouseHold(HouseHolddata);
  return responses;
};

const UpdateHouseHoldObj = async (idhousehold, updatedData) => {
  const parseId = parseInt(idhousehold, 10);
  if (!parseId) {
    return 2;
  }
  const response = await UpdateHouseHold(parseId, updatedData);
  return response;
};

module.exports = {
  UpdateHouseHoldObj,
  AddHouseHoldToDb,
  AddManyHouseHoldToDb,
  DeleteHousHoldFromDb,
  ReturnHouseHoldWithId,
  ReturnAllHouseHold,
};

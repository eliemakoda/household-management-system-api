const {
  CreateCollecthistory,
  CreateManyCollecthistory,
  UpdateCollectHist,
  DeleteCOllHist,
  GetAllCollectHist,
  GetCollectHistoryById,
  GetCollectHistoryByCommandID,
} = require("../../models");

const ReturnCollectionByCommandID = async (cmdID) => {
  const parseId = parseInt(cmdID, 10);
  if (!parseId) {
    return 2;
  }
  const response = await GetCollectHistoryByCommandID(cmdID);
  return response;
};
const ReturnCollById = async (idcoll) => {
  const id = parseInt(idcoll, 10);
  if (!id) {
    return 2;
  }
  const response = await GetCollectHistoryById(id);
  return response;
};

const ReturnAllColl = async () => {
  const response = await GetAllCollectHist();
  return response;
};
const deleteColHist = async (idcoll) => {
  const id = parseInt(idcoll, 10);
  if (!id) {
    return 2;
  }
  const response = await DeleteCOllHist(id);
  return response;
};
const AddCollectHist = async (data) => {
  const response = await CreateCollecthistory(data);
  return response;
};
const AddManyCollectHist = async (data) => {
  const response = await CreateManyCollecthistory(data);
  return response;
};

const UpdateASingleCollectHist = async (collId, data) => {
  const parseId = parseInt(collId);
  if (!parseId) {
    return 2;
  }
  const response = await UpdateCollectHist(parseId, data);
  return response;
};

module.exports = {
  UpdateASingleCollectHist,
  AddManyCollectHist,
  AddCollectHist,
  deleteColHist,
  ReturnAllColl,
  ReturnCollById,
  ReturnCollectionByCommandID,
};

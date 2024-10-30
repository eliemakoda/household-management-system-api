const {
  DeleteACommandByID,
  UpdateCommandByID,
  CreateManyCommand,
  CreateCommand,
  GetCommandByClientID,
  GetCommandeByAgentId,
  GetCommandByID,
  GetAllCommand,
  assignCommandToAgent,
} = require("../../models");

const SetAgentForCommand = async (idcmd, IdAgent) => {
  const parseId = parseInt(idcmd);
  const parseAgent = parseInt(IdAgent, 10);
  if (!parseId || !parseAgent) {
    return 2;
  }
  const response = await assignCommandToAgent(idcmd, IdAgent);
  return response;
};

const ReturnAllCommand = async () => {
  const result = await GetAllCommand();
  return result;
};
const ReturnCommandById = async (idcmd) => {
  const parseId = parseInt(idcmd);
  if (!parseId) {
    return 2;
  }
  const result = await GetCommandByID(parseId);
  return result;
};
const ReturnCommandByAgentId = async (idAgent) => {
  const parseId = parseInt(idAgent);
  if (!parseId) {
    return 2;
  }
  const result = await GetCommandeByAgentId(parseId);
  return result;
};
const ReturnCommandByClientId = async (idClient) => {
  const parseId = parseInt(idClient,10);
  if (!parseId) {
    return 2;
  }
  const result = await GetCommandByClientID(parseId);
  return result;
};
const AddManyCommandToDb = async (data) => {
  const response = await CreateManyCommand(data);
  return response;
};
const AddCommandToDb = async (data) => {
  const response = await CreateCommand(data);
  return response;
};
const updateCommandWithId = async (idcmd, data) => {
  const parseId = parseInt(idcmd);
  if (!parseId) {
    return 2;
  }
  const response = await UpdateCommandByID(idcmd, data);
  return response;
};

const DeleteCommandWithId = async (idCmd) => {
  const parseId = parseInt(idCmd, 10);
  if (!parseId) {
    return 2;
  }
  const response = await DeleteACommandByID(idCmd);
  return response;
};

module.exports = {
  DeleteCommandWithId,
  updateCommandWithId,
  AddCommandToDb,
  AddManyCommandToDb,
  ReturnCommandByClientId,
  ReturnCommandByAgentId,
  ReturnCommandById,
  ReturnAllCommand,
  SetAgentForCommand,
};

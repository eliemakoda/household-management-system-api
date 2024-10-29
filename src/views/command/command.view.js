const {
  DeleteCommandWithId,
  updateCommandWithId,
  AddCommandToDb,
  AddManyCommandToDb,
  ReturnCommandByClientId,
  ReturnCommandByAgentId,
  ReturnCommandById,
  ReturnAllCommand,
  SetAgentForCommand,
} = require("../../controllers");

async function AddAgentForCommands(req, res) {
  const agents = req.body;
  const commandId = req.params.idcmd;
  if (!commandId) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing agent  ID in params!" });
  }
  const data = await SetAgentForCommand(commandId, agents);
  if (data === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (data === 2) {
    return res
      .status(404)
      .send({ msg: "Not Command Found With the given  ID ! " });
  }
  return res.status(200).send(data);
}
const GetAllCommand = async (req, res) => {
  const data = await ReturnAllCommand();
  if (data === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }

  return res.status(200).send(data);
};
const GetAllClientCommand = async (req, res) => {
  const clientId = req.params.clientId;
  if (!clientId) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing agent  ID in params!" });
  }
  const response = await ReturnCommandByClientId(clientId);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Command Found With the given  ID ! " });
  }
  return res.status(200).send(response);
};
const GetAllagentCommand = async (req, res) => {
  const agentId = req.params.agentId;
  if (!agentId) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing agent  ID in params!" });
  }
  const response = await ReturnCommandByAgentId(agentId);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Command Found With the given  ID ! " });
  }
  return res.status(200).send(response);
};
const GetAllUserCommand = async (req, res) => {
  const idcmd = req.params.idcmd;
  if (!idcmd) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing collection ID in params!" });
  }
  const response = await ReturnCommandById(idcmd);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Command Found With the given  ID ! " });
  }
  return res.status(200).send(response);
};
const InsertManyCommandToDB = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const response = await AddManyCommandToDb(req.body);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }

  if (response === 6) {
    return res
      .status(400)
      .send({ msg: "Bad request Check documentation for more details....! " });
  }
  return res.status(201).send(response);
};

const InsertCommandToDB = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const response = await AddCommandToDb(req.body);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }

  if (response === 6) {
    return res
      .status(400)
      .send({ msg: "Bad request Check documentation for more details....! " });
  }
  return res.status(201).send(response);
};

const UpdateCommand = async (req, res) => {
  const idcmd = req.params.idcmd;
  if (!idcmd) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing collection ID in params!" });
  }
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const body = req.body;

  const response = await updateCommandWithId(idcmd, body);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Command Found With the given  ID ! " });
  }
  if (response === 6) {
    return res
      .status(400)
      .send({ msg: "Bad request Check documentation for more details....! " });
  }
  return res.status(201).send(response);
};
const removeCommandWithId = async (req, res) => {
  const idcmd = req.params.idcmd;
  if (!idcmd) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing collection ID in params!" });
  }
  const response = await DeleteCommandWithId(idcmd);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Command Found With the given  ID ! " });
  }
  return res.status(201).send(response);
};
module.exports = {
  removeCommandWithId,
  UpdateCommand,
  InsertCommandToDB,
  InsertManyCommandToDB,
  GetAllUserCommand,
  GetAllClientCommand,
  GetAllCommand,
  AddAgentForCommands,
};

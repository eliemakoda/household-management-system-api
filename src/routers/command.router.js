const express = require("express");

const {
  removeCommandWithId,
  UpdateCommand,
  InsertCommandToDB,
  InsertManyCommandToDB,
  GetAllUserCommand,
  GetAllClientCommand,
  GetAllCommand,
  AddAgentForCommands,
} = require("../views");

const CommandRouter = express.Router();

CommandRouter.delete("/rmcmd/:idcmd", removeCommandWithId);
CommandRouter.put("/updateCmd/:idcmd", UpdateCommand);
CommandRouter.post("/addCommand", InsertCommandToDB);
CommandRouter.post("/addManyCommand", InsertManyCommandToDB);
CommandRouter.post("/addAgentForCmd", AddAgentForCommands);

CommandRouter.get("/allusersCmd/:idcmd", GetAllUserCommand);
CommandRouter.get("/allClientCmd/:clientId", GetAllClientCommand);
CommandRouter.get("/allAgentCmd/:agentId", GetAllClientCommand);
CommandRouter.get("/allCmd/:agentId", GetAllCommand);

module.exports = CommandRouter;

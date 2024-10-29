const db = require("../../../config/database.config");

const GetAllCommand = async () => {
  try {
    const response = await db.commande.findMany();
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};
const GetCommandByID = async (idCommand) => {
  try {
    const response = await db.commande.findUnique({
      where: {
        id: idCommand,
      },
      include: {
        client: true,
        agent: true,
        historiques: true,
      },
    });
    if (!response) {
      return 2;
    }
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};
const GetCommandeByAgentId = async (agentId) => {
  try {
    const response = await db.commande.findMany({
      where: {
        agentId: agentId,
      },
      include: {
        client: true,
        historiques: true,
      },
    });
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};

const GetCommandByClientID = async (clientId) => {
  try {
    const response = await db.commande.findMany({
      where: {
        clientId: clientId,
      },
      include: {
        Dechet: true,
        client: true,
        agent: true,
        historiques: true,
      },
    });
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};

const CreateCommand = async (data) => {
  try {
    const response = await db.commande.create({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};

const CreateManyCommand = async (data) => {
  try {
    const response = await db.commande.createMany({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};

const UpdateCommandByID = async (cmdId, data) => {
  try {
    const response = await db.commande.update({
      where: {
        id: cmdId,
      },
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};

const DeleteACommandByID = async (idCmd) => {
  try {
    const response = await db.commande.delete({
      where: {
        id: idCmd,
      },
    });
    if (!response) {
      return 2;
    }
    return response;
  } catch (err) {
    console.err("[COMMAND_MODEL] an error occur here!");
    return 0;
  }
};
const assignCommandToAgent = async (commandId, agentId) => {
    try {
      const updatedCommand = await db.commande.update({
        where: { id: commandId },
        data: { agentId: agentId },
      });
      return updatedCommand? updatedCommand:6
    } catch (error) {
      console.error("[COMMAND_MODEL] An error occurred while assigning the command:", error);
    return 0; 
    }
  };
module.exports = {
  DeleteACommandByID,
  UpdateCommandByID,
  CreateManyCommand,
  CreateCommand,
  GetCommandByClientID,
  GetCommandeByAgentId,
  GetCommandByID,
  GetAllCommand,
  assignCommandToAgent
};

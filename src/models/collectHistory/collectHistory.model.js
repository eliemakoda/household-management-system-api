const db = require("../../../config/database.config");

const GetCollectHistoryByCommandID = async (IdCommand) => {
  try {
    const response = await db.historiqueCollecte.findUnique({
      where: {
        commandeId: IdCommand,
      },
      include: {
        commande: true,
      },
    });
    if (!response) {
      return 2;
    }
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};
const GetCollectHistoryById = async (idHistory) => {
  try {
    const response = await db.historiqueCollecte.findUnique({
      where: {
        id: idHistory,
      },
      include: {
        commande: true,
      },
    });
    if (!response) {
      return 2;
    }
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};

const GetAllCollectHist = async () => {
  try {
    const response = await db.historiqueCollecte.findMany({
      include: {
        commande: true,
      },
    });
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};
const DeleteCOllHist = async (idColl) => {
  try {
    const isCollectExist = await GetCollectHistoryById(idColl);
    if (isCollectExist === 2 || isCollectExist === 0) {
      return isCollectExist;
    }
    const response = await db.historiqueCollecte.delete({
      where: {
        id: idColl,
      },
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};
const UpdateCollectHist = async (collectHistId, data) => {
  try {
    const isCollectExist = await GetCollectHistoryById(collectHistId);
    if (isCollectExist === 2 || isCollectExist === 0) {
      return isCollectExist;
    }
    const response = await db.historiqueCollecte.update({
      where: {
        id: collectHistId,
      },
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};
const CreateManyCollecthistory = async (data) => {
  try {
    const response = await db.historiqueCollecte.createMany({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};

const CreateCollecthistory = async (data) => {
  try {
    const response = await db.historiqueCollecte.create({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.error("[COLLECTHISTORY_CONTROLLER] an error occur here");
    return 0;
  }
};

module.exports = {
  CreateCollecthistory,
  CreateManyCollecthistory,
  UpdateCollectHist,
  DeleteCOllHist,
  GetAllCollectHist,
  GetCollectHistoryById,
  GetCollectHistoryByCommandID,
};

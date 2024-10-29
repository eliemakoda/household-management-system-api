const db = require("../../../config/database.config");

const CreateLocationWithAgent = async (data, agentIds) => {
  try {
    const newZone = await db.zoneDeCollecte.create({
      data: {
        ...data,
        agents: {
          connect: agentIds.map((id) => ({ id })),
        },
      },
    });
    if (!newZone) {
      return 6;
    }
    return newZone;
  } catch (err) {
    console.log("[LOCATION_MODEL] an error occur here! ");
    return 0;
  }
};

const CreateManyLocationWithAgent = async (data, agentIds) => {
  try {
    const newZone = await db.zoneDeCollecte.createMany({
      data: {
        ...data,
        agents: {
          connect: agentIds.map((id) => ({ id })),
        },
      },
    });
    if (!newZone) {
      return 6;
    }
    return newZone;
  } catch (err) {
    console.log("[LOCATION_MODEL] an error occur here! ");
    return 0;
  }
};

const GetLocationById = async (idloc) => {
  try {
    const response = await db.zoneDeCollecte.findUnique({
      where: id,
    });
    if (!response) {
      return 2;
    }
    return response;
  } catch (err) {
    console.log("[LOCATION_MODEL] an error occur here! ");
    return 0;
  }
};

const GetAnAgentLocation = async (agentId) => {
  try {
    const locations = await db.zoneDeCollecte.findMany({
      where: {
        agents: {
          some: {
            id: agentId,
          },
        },
      },
      include: {
        agents: true,
      },
    });
    if(!locations){
      return 2
    }
    return locations;
  } catch (error) {
    console.error(
      "[LOCATION_MODEL] An error occurred while fetching locations:"
    );
    return 0
  }
};

const GetAllLocation = async () => {
  try {
    const response = await db.zoneDeCollecte.findMany();
    return response;
  } catch (error) {
    console.error(
      "[LOCATION_MODEL] An error occurred while fetching locations:"
    );
    return 0
  }
};
async function UpdateLocation(locId, data) {
  try {
    const response = await db.zoneDeCollecte.update({
      where: {
        id: locId,
      },
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (error) {
    console.error(
      "[LOCATION_MODEL] An error occurred while fetching locations:"
    );
    return 0

  }
}
module.exports = {
  UpdateLocation,
  GetAllLocation,
  GetAnAgentLocation,
  GetLocationById,
  CreateManyLocationWithAgent,
  CreateLocationWithAgent,
};

const db = require("../../../config/database.config");

// House Hold Managament system

const GetAllHouseHold = async () => {
  try {
    const response = await db.dechet.findMany();
    return response;
  } catch (err) {
    console.log("[HOUSEHOLD_MODEL] an error occur here");
    return 0;
  }
};

const GetHouseHoldById = async (idhouseHold) => {
  try {
    const response = await db.dechet.findUnique({
      where: {
        id: idhouseHold,
      },
    });
    if (!response) {
      return 2;
    }
    return response;
  } catch (err) {
    console.log("[HOUSEHOLD_MODEL] an error occur here");
    return 0;
  }
};

const DeleteHouseHold = async (idhouseHold) => {
  try {
    const isHouseHoldExist = await GetHouseHoldById(idhouseHold);
    if (isHouseHoldExist === 2 || isHouseHoldExist === 0) {
      return isHouseHoldExist;
    }
    const response = await db.dechet.delete({
      where: {
        id: idhouseHold,
      },
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[HOUSEHOLD_MODEL] an error occur here");
    return 0;
  }
};

const CreatHouseHold = async (data) => {
  try {
    const response = await db.dechet.create({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[HOUSEHOLD_MODEL] an error occur here");
    return 0;
  }
};

const CreateManyHouseHold = async (data) => {
  try {
    const response = await db.dechet.createMany({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[HOUSEHOLD_MODEL] an error occur here");
    return 0;
  }
};

const UpdateHouseHold = async (idhouseHold, data) => {
  try {
    const response = await db.dechet.update({
      where: {
        id: idhouseHold,
      },
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[HOUSEHOLD_MODEL] an error occur here");
    return 0;
  }
};
module.exports = {
  UpdateHouseHold,
  CreateManyHouseHold,
  CreatHouseHold,
  DeleteHouseHold,
  GetHouseHoldById,
  GetAllHouseHold,
};

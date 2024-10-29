const db = require("../../../config/database.config");

const {
  hashPassword,
  verifyPassword,
  validatePassword,
} = require("../../../utils");

const CreateUser = async (newUser) => {
  try {
    
    const response = await db.utilisateur.create({
      data: newUser,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[USER_CONTROLLER] an error occur here");
    return 0;
  }
};
const GetAllUsers = async () => {
  try {
    const users = await db.utilisateur.findMany();
    return users;
  } catch (err) {
    console.log("[USER_CONTROLLER] an error occur here");
    return 0;
  }
};

const GetUserByEMail = async (userEmail) => {
  try {
    const user = await db.utilisateur.findUnique({
      where: {
        email: userEmail
      },
    });
    if (!user) {
      return 2;
    }
    return user;
  } catch (err) {
    console.log("[USER_CONTROLLER] an error occur here");
    console.log(err)
    return 0;
  }
};

const GetUserById = async (userId) => {
  try {
    const user = await db.utilisateur.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return 2;
    }
    return user;
  } catch (err) {
    console.log("[USER_CONTROLLER] an error occur here");
    return 0;
  }
};

const deleteUserById = async (userId) => {
  try {
    const isUserExist = await GetUserById(userId);
    if (isUserExist === 0 || isUserExist === 2) {
      return isUserExist;
    }
    const response = await db.utilisateur.delete({
      where: {
        id: userId,
      },
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[USER_CONTROLLER] an error occur here");
    return 0;
  }
};
const UpdateUserData = async (userId, userData) => {
  try {
    const isUserExist = await GetUserById(userId);
    if (isUserExist === 2 || isUserExist === 0) {
      return isUserExist;
    }
    const result = await db.utilisateur.update({
      data: userData,
    });
    if (!result) {
      return 3;
    }
    return result;
  } catch (err) {
    console.log("[USER_CONTROLLER] an error occur here");
    return 0;
  }
};

const hashUserPassword = async (password) => {
  const hashedpassword = await hashPassword(password);
  return hashedpassword;
};
const assignUserToZone = async (zoneId, userId) => {
  try {
    const updatedZone = await db.zoneDeCollecte.update({
      where: { id: zoneId },
      data: {
        agents: {
          connect: { id: userId }, // Connect the agent to the zone
        },
      },
    });
    return updatedZone; // Return the updated zone
  } catch (error) {
    console.error("[ZONE_MODEL] An error occurred while assigning the user to the zone:", error);
    return 0
  }
};

module.exports={
  hashUserPassword,
  UpdateUserData,
  deleteUserById,
  GetUserById,
  GetUserByEMail,
  GetAllUsers,
  CreateUser,
  assignUserToZone
}
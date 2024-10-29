const db = require("../../../config/database.config");

const GetNotificationById = async (notifId) => {
  try {
    const responses = await db.notification.findUnique({
      where: {
        id: notifId,
      },
    });
    return responses ? responses : 2;
  } catch (err) {
    console.log("[NOTIFICAION_MODEL] an error occur here! ");
    return 0;
  }
};
const GetNotifByUserID = async (userId) => {
  try {
    const response = await db.notification.findMany({
      where: {
        utilisateurId: userId,
      },
    });
    return response;
  } catch (err) {
    console.log("[NOTIFICAION_MODEL] an error occur here! ");
    return 0;
  }
};
const GetAllNotif = async () => {
  try {
    const response = await db.notification.findMany();
    return response;
  } catch (err) {
    console.log("[NOTIFICAION_MODEL] an error occur here! ");
    return 0;
  }
};
const CreateUserNotification = async (data) => {
  try {
    const response = await db.notification.create({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[NOTIFICAION_MODEL] an error occur here! ");
    return 0;
  }
};
const CreateManyUserNotification = async (data) => {
  try {
    const response = await db.notification.createMany({
      data: data,
    });
    if (!response) {
      return 6;
    }
    return response;
  } catch (err) {
    console.log("[NOTIFICAION_MODEL] an error occur here! ");
    return 0;
  }
};

module.exports = {
  CreateManyUserNotification,
  CreateUserNotification,
  GetAllNotif,
  GetNotifByUserID,
  GetNotificationById,
};

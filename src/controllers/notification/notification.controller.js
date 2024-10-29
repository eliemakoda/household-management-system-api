const {
  CreateManyUserNotification,
  CreateUserNotification,
  GetAllNotif,
  GetNotifByUserID,
  GetNotificationById,
} = require("../../models");


const ReturnNotifById=async(idNotif)=>{
    const parseId= parseInt(idNotif)
    const results = await  GetNotificationById(parseId)
    return results
}
const ReturnNotifForuserWithId=async(userId)=>{
    const parseId= parseInt(userId)
    const results = await  GetNotifByUserID(parseId)
    return results
}

const ReturnAllNotif = async () => {
  const response = GetAllNotif();
  return response;
};
const AddNotificationToDB = async (data) => {
  const response = await CreateUserNotification(data);
  return response;
};

const AddManyNotificationToDB = async (data) => {
  const response = await CreateManyUserNotification(data);
  return response;
};


module.exports= {
    AddManyNotificationToDB,
    AddNotificationToDB,
    ReturnAllNotif,
    ReturnNotifForuserWithId,
    ReturnNotifById
}
const {
  ReturnAllusers,
  ReturnHashedpassword,
  AddUserToDatabase,
  RemoveUserFromDB,
  ReturnUserWithId,
  ReturnUserByEmail,
  updateUserInfos,
} = require("./users/users.controller");
const {
  UpdateASingleCollectHist,
  AddManyCollectHist,
  AddCollectHist,
  deleteColHist,
  ReturnAllColl,
  ReturnCollById,
  ReturnCollectionByCommandID,
} = require("./collectHistory/collectHistory.controller");

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
} = require("./command/command.controller");

const {
  UpdateHouseHoldObj,
  AddHouseHoldToDb,
  AddManyHouseHoldToDb,
  DeleteHousHoldFromDb,
  ReturnHouseHoldWithId,
  ReturnAllHouseHold,
} = require("./household/houshold.controller");

const {
  returnAgentLocation,
  ReturnAllLoc,
  ReturnLocationWithId,
  SetUpdateLocation,
  AddLocationToDb,
  AddManyLocationToDb,
} = require("./location/location.controller");
const  {
  AddManyNotificationToDB,
  AddNotificationToDB,
  ReturnAllNotif,
  ReturnNotifForuserWithId,
  ReturnNotifById
}=require("./notification/notification.controller")

module.exports = {
  ReturnAllusers,
  ReturnHashedpassword,
  AddUserToDatabase,
  RemoveUserFromDB,
  ReturnUserWithId,
  ReturnUserByEmail,
  updateUserInfos,

  //collect history

  UpdateASingleCollectHist,
  AddManyCollectHist,
  AddCollectHist,
  deleteColHist,
  ReturnAllColl,
  ReturnCollById,
  ReturnCollectionByCommandID,

  //command

  DeleteCommandWithId,
  updateCommandWithId,
  AddCommandToDb,
  AddManyCommandToDb,
  ReturnCommandByClientId,
  ReturnCommandByAgentId,
  ReturnCommandById,
  ReturnAllCommand,
  SetAgentForCommand,

  //house hold (dechets)

  UpdateHouseHoldObj,
  AddHouseHoldToDb,
  AddManyHouseHoldToDb,
  DeleteHousHoldFromDb,
  ReturnHouseHoldWithId,
  ReturnAllHouseHold,

  //localtion data

  returnAgentLocation,
  ReturnAllLoc,
  ReturnLocationWithId,
  SetUpdateLocation,
  AddLocationToDb,
  AddManyLocationToDb,

  //notification
  
    AddManyNotificationToDB,
    AddNotificationToDB,
    ReturnAllNotif,
    ReturnNotifForuserWithId,
    ReturnNotifById

};

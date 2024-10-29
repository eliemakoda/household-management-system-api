const {
  GetAllUsers,
  GetPasswordHash,
  CreateNewuser,
  DeleteUSerById,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
} = require("./users/users.view");
const {
  GEtAllCollectHist,
  GetCollById,
  GetCollByCommandId,
  CreateCollectHist,
  CreatemanyCollectHist,
  updateCollectHist,
  RemoveCollFormDb,
} = require("./collectHistory/collectHistory.view");

const {
  removeCommandWithId,
  UpdateCommand,
  InsertCommandToDB,
  InsertManyCommandToDB,
  GetAllUserCommand,
  GetAllClientCommand,
  GetAllCommand,
  AddAgentForCommands,
} = require("./command/command.view");

const {
  GetAllHouseHold,
  GethouseHoldById,
  DeletehouseHoldById,
  CreateHouseHold,
  CreateManyHouseHold,
  UpdateHouseHold,
} = require("./household/household.view");

const {
  GetAgentWithId,
  GetallLocations,
  GetLocationById,
  UpdateLocation,
  InsertAlocationToDb,
  InsertManylocationToDb,
} = require("./location/location.view");

const {
  GetAllNotif,
  GetNotificationById,
  GetNotificationByUserId,
  InsertNotificationToDB,
  InsertManyNotificationToDB,
} = require("./notification/notification.view");
module.exports = {
  GetAllUsers,
  GetPasswordHash,
  CreateNewuser,
  DeleteUSerById,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
  // collect history
  GEtAllCollectHist,
  GetCollById,
  GetCollByCommandId,
  CreateCollectHist,
  CreatemanyCollectHist,
  updateCollectHist,
  RemoveCollFormDb,

  // command view

  removeCommandWithId,
  UpdateCommand,
  InsertCommandToDB,
  InsertManyCommandToDB,
  GetAllUserCommand,
  GetAllClientCommand,
  GetAllCommand,
  AddAgentForCommands,
  //  house hold

  GetAllHouseHold,
  GethouseHoldById,
  DeletehouseHoldById,
  CreateHouseHold,
  CreateManyHouseHold,
  UpdateHouseHold,

  // location Data
  GetAgentWithId,
  GetallLocations,
  GetLocationById,
  UpdateLocation,
  InsertAlocationToDb,
  InsertManylocationToDb,

  // notification management system

  GetAllNotif,
  GetNotificationById,
  GetNotificationByUserId,
  InsertNotificationToDB,
  InsertManyNotificationToDB,
};

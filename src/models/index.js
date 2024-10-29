const {
  hashUserPassword,
  UpdateUserData,
  deleteUserById,
  GetUserById,
  GetUserByEMail,
  GetAllUsers,
  CreateUser,
  assignUserToZone,
} = require("./users/user.model");

const {
  CreateCollecthistory,
  CreateManyCollecthistory,
  UpdateCollectHist,
  DeleteCOllHist,
  GetAllCollectHist,
  GetCollectHistoryById,
  GetCollectHistoryByCommandID,
} = require("./collectHistory/collectHistory.model");

const {
  DeleteACommandByID,
  UpdateCommandByID,
  CreateManyCommand,
  CreateCommand,
  GetCommandByClientID,
  GetCommandeByAgentId,
  GetCommandByID,
  GetAllCommand,
  assignCommandToAgent,
} = require("./command/command.model");

const {
  UpdateHouseHold,
  CreateManyHouseHold,
  CreatHouseHold,
  DeleteHouseHold,
  GetHouseHoldById,
  GetAllHouseHold,
} = require("./household/household.model");

const {
  UpdateLocation,
  GetAllLocation,
  GetAnAgentLocation,
  GetLocationById,
  CreateManyLocationWithAgent,
  CreateLocationWithAgent,
} = require("./location/location.model");

const {
  CreateManyUserNotification,
  CreateUserNotification,
  GetAllNotif,
  GetNotifByUserID,
  GetNotificationById,
} = require("./notification/notification.model");

module.exports = {
  hashUserPassword,
  UpdateUserData,
  deleteUserById,
  GetUserById,
  GetUserByEMail,
  GetAllUsers,
  CreateUser,
  assignUserToZone,
  //collect history
  CreateCollecthistory,
  CreateManyCollecthistory,
  UpdateCollectHist,
  DeleteCOllHist,
  GetAllCollectHist,
  GetCollectHistoryById,
  GetCollectHistoryByCommandID,

  //command

  DeleteACommandByID,
  UpdateCommandByID,
  CreateManyCommand,
  CreateCommand,
  GetCommandByClientID,
  GetCommandeByAgentId,
  GetCommandByID,
  GetAllCommand,
  assignCommandToAgent,
  //household

  UpdateHouseHold,
  CreateManyHouseHold,
  CreatHouseHold,
  DeleteHouseHold,
  GetHouseHoldById,
  GetAllHouseHold,

  // location management

  UpdateLocation,
  GetAllLocation,
  GetAnAgentLocation,
  GetLocationById,
  CreateManyLocationWithAgent,
  CreateLocationWithAgent,

  //notification
  CreateManyUserNotification,
  CreateUserNotification,
  GetAllNotif,
  GetNotifByUserID,
  GetNotificationById,
};

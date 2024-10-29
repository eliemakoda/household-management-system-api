const {
  AddManyNotificationToDB,
  AddNotificationToDB,
  ReturnAllNotif,
  ReturnNotifForuserWithId,
  ReturnNotifById,
} = require("../../controllers");

const GetNotificationById = async (req, res) => {
  const notifId = req.params.notifId;
  if (!notifId) {
    return res.status(422).send({
      msg: "Request Malformed! Missing userId in your request's params",
    });
  }
  const response = await ReturnNotifById(notifId);
  if (response === 0) {
    res.status(500).send({
      msg: "Server-Error! Server did not respond correctly! try again later",
    });
  }
  return res.status(200).send(response);
};
const GetNotificationByUserId = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(422).send({
      msg: "Request Malformed! Missing userId in your request's params",
    });
  }
  const response = await ReturnNotifForuserWithId(userId);
  if (response === 0) {
    res.status(500).send({
      msg: "Server-Error! Server did not respond correctly! try again later",
    });
  }
  return res.status(200).send(response);
};
const GetAllNotif = async (req, res) => {
  const response = await ReturnAllNotif();
  if (response === 0) {
    res.status(500).send({
      msg: "Server-Error! Server did not respond correctly! try again later",
    });
  }
  return res.status(200).send(response);
};
const InsertNotificationToDB = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }

  const data = req.body;
  const response = await AddNotificationToDB(data);
  if (response === 6) {
    return res.status(403).send({
      msg: "Forbidden! impossible to create please check documentation for more details ",
    });
  }
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! Server did not respond correctly! try again later",
    });
  }
  return res.status(201).send(response);
};

const InsertManyNotificationToDB = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }

  const data = req.body;
  const response = await AddManyNotificationToDB(data);
  if (response === 6) {
    return res.status(403).send({
      msg: "Forbidden! impossible to create please check documentation for more details ",
    });
  }
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! Server did not respond correctly! try again later",
    });
  }
  return res.status(201).send(response);
};
module.exports={
    GetAllNotif,
    GetNotificationById,
    GetNotificationByUserId,
    InsertNotificationToDB,
    InsertManyNotificationToDB
}
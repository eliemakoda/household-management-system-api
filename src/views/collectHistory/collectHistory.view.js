const {
  UpdateASingleCollectHist,
  AddManyCollectHist,
  AddCollectHist,
  deleteColHist,
  ReturnAllColl,
  ReturnCollById,
  ReturnCollectionByCommandID,
} = require("../../controllers");

async function RemoveCollFormDb(req, res) {
  const idcoll = req.params.collId;
  if (!idcoll) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing collection ID in params!" });
  }
  const response = await deleteColHist(idcoll);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Collection Found With the given  ID ! " });
  }
  return res.status(201).send(response);
}
const updateCollectHist = async (req, res) => {
  const collId = req.params.collId;
  if (!collId) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing collection ID in params!" });
  }
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const body = req.body;
  const response = await UpdateASingleCollectHist(collId, body);
  if (!response) {
    return res
      .status(400)
      .send({ msg: "Bad Request: Your request is malformed!" });
  }

  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Collection Found With the given  ID ! " });
  }
  return res.status(201).send(response);
};
const CreatemanyCollectHist = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const body = req.body;
  const response = await AddManyCollectHist(body);
  if (!response) {
    return res
      .status(400)
      .send({ msg: "Bad Request: Your request is malformed!" });
  }
  return res.status(201).send(response);
};
const CreateCollectHist = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const body = req.body;
  const response = await AddCollectHist(body);
  if (!response) {
    return res
      .status(400)
      .send({ msg: "Bad Request: Your request is malformed!" });
  }
  return res.status(201).send(response);
};
const GetCollByCommandId = async (cmdId) => {
  const cmdID = req.params.cmdID;
  const response = await ReturnCollectionByCommandID(cmdID);
  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Collection Found With the given Command ID ! " });
  }
  return res.status(200).send(response);
};
const GetCollById = async (req, res) => {
  const collId = req.params.collId;
  if (!collId) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! missing collection ID in params!" });
  }
  const response = await ReturnCollById(collId);

  if (response === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not Collection Found With the given ID ! " });
  }
  return res.status(200).send(response);
};
const GEtAllCollectHist = async (req, res) => {
  const data = await ReturnAllColl();
  if (data === 0) {
    return res.status(500).send({ msg: "Server-Error! Try AGain Later! " });
  }
  return res.status(200).send(data);
};

module.exports = {
  GEtAllCollectHist,
  GetCollById,
  GetCollByCommandId,
  CreateCollectHist,
  CreatemanyCollectHist,
  updateCollectHist,
  RemoveCollFormDb,
};

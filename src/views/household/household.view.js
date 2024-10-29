const {
  UpdateHouseHoldObj,
  AddHouseHoldToDb,
  AddManyHouseHoldToDb,
  DeleteHousHoldFromDb,
  ReturnHouseHoldWithId,
  ReturnAllHouseHold,
} = require("../../controllers");

const UpdateHouseHold = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const idhouse = req.params.idhouse;
  if (!idhouse) {
    return res.status(422).send({ msg: "Missing idhouseHold in params!" });
  }
  const BodyData = req.body;
  const response = await UpdateHouseHoldObj(idhouse, BodyData);
  if (response === 6) {
    return res.status(400).send({
      msg: "Bad Request! Cannot Update Item To Database! please check the documentation",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Server Error! try again Later!" });
  }
  return res.status(200).send(response);
};

const CreateManyHouseHold = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }

  const BodyData = req.body;
  const response = await AddManyHouseHoldToDb(BodyData);
  if (response === 6) {
    return res.status(400).send({
      msg: "Bad Request! Cannot add Item To Database! please check the documentation",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Server Error! try again Later!" });
  }
  return res.status(200).send(response);
};
const CreateHouseHold = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }

  const BodyData = req.body;
  const response = await AddHouseHoldToDb(BodyData);
  if (response === 6) {
    return res.status(400).send({
      msg: "Bad Request! Cannot add Item To Database! please check the documentation",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Server Error! try again Later!" });
  }
  return res.status(200).send(response);
};
const DeletehouseHoldById = async (req, res) => {
  const idhouse = req.params.idhouse;
  if (!idhouse) {
    return res.status(422).send({ msg: "Missing idhouseHold in params!" });
  }
  const response = await DeleteHousHoldFromDb(idhouse);
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-Found! No houseHold found with that Id!" });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Server Error! try again Later!" });
  }
  return res.status(200).send(response);
};

const GethouseHoldById = async (req, res) => {
  const idhouse = req.params.idhouse;
  if (!idhouse) {
    return res.status(422).send({ msg: "Missing idhouseHold in params!" });
  }

  const response = await ReturnHouseHoldWithId(idhouse);
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-Found! No houseHold found with that Id!" });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Server Error! try again Later!" });
  }
  return res.status(200).send(response);
};
const GetAllHouseHold = async (req, res) => {
  const response = await ReturnAllHouseHold();
  if (response === 0) {
    return res.status(500).send({ msg: "Server Error! try again Later!" });
  }
  return res.status(200).send(response);
};

module.exports = {
  GetAllHouseHold,
  GethouseHoldById,
  DeletehouseHoldById,
  CreateHouseHold,
  CreateManyHouseHold,
  UpdateHouseHold,
};

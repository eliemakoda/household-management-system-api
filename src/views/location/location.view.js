const {
  returnAgentLocation,
  ReturnAllLoc,
  ReturnLocationWithId,
  SetUpdateLocation,
  AddLocationToDb,
  AddManyLocationToDb,
} = require("../../controllers");

const InsertManylocationToDb = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const body = req.body.data;
  const agentBody = req.body.agents;
  if (!req.body.agents || Object.keys(req.body.agents).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Agent Object  in your request",
    });
  }
  if (!req.body.data || Object.keys(req.body.data).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing data Object  in your request",
    });
  }
  const response = await AddManyLocationToDb(body, agentBody);
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! please check the documentation for more explanation",
    });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No agent found with the given Id" });
  }
  if (response === 6) {
    return res
      .status(401)
      .send({ msg: "Forbidden! Impossible to update the given location" });
  }
  return res.status(200).send(response);
};
const InsertAlocationToDb = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const body = req.body.data;
  const agentBody = req.body.agents;
  if (!req.body.agents || Object.keys(req.body.agents).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Agent Object  in your request",
    });
  }
  if (!req.body.data || Object.keys(req.body.data).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing data Object  in your request",
    });
  }
  const response = await AddLocationToDb(body, agentBody);
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! please check the documentation for more explanation",
    });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No agent found with the given Id" });
  }
  if (response === 6) {
    return res
      .status(401)
      .send({ msg: "Forbidden! Impossible to update the given location" });
  }
  return res.status(200).send(response);
};

const UpdateLocation = async (req, res) => {
  const id = req.params.idloc;
  if (!id) {
    return res
      .status(422)
      .send({ msg: "Malformed Request! Missing location Id in params" });
  }
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  body = req.body;
  const response = await SetUpdateLocation(id, body);
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! please check the documentation for more explanation",
    });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No agent found with the given Id" });
  }
  if (response === 6) {
    return res
      .status(401)
      .send({ msg: "Forbidden! Impossible to update the given location" });
  }
  return res.status(200).send(response);
};
const GetLocationById = async (req, res) => {
  const id = req.params.idloc;
  if (!idloc) {
    return res.status(422).send({
      msg: "Malformed-Request! Missing location Id in your request's header",
    });
  }
  const parseId = parseInt(id, 10);
  if (!parseId) {
    return res
      .status(404)
      .send({ msg: "Not-Found! No location found with that id" });
  }
  const response = await ReturnLocationWithId(parseId);
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! please check the documentation for more explanation",
    });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No location found with the given Id" });
  }
  return res.status(200).send(response);
};
const GetallLocations = async (req, res) => {
  const response = await ReturnAllLoc();
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! please check the documentation for more explanation",
    });
  }
  return res.status(200).send(response);
};
const GetAgentWithId = async (req, res) => {
  const agentId = req.params.agentId;
  if (!agentId) {
    return res.status(422).send({ msg: "Missing Agent Id in params" });
  }
  const parseId = parseInt(agentId, 10);
  const response = await returnAgentLocation(parseId);
  if (response === 0) {
    return res.status(500).send({
      msg: "Server-Error! please check the documentation for more explanation",
    });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No location found with the given Id" });
  }

  return res.status(200).send(response);
};

module.exports = {
  GetAgentWithId,
  GetallLocations,
  GetLocationById,
  UpdateLocation,
  InsertAlocationToDb,
  InsertManylocationToDb,
};

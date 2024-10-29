const {
  ReturnAllusers,
  ReturnHashedpassword,
  AddUserToDatabase,
  RemoveUserFromDB,
  ReturnUserWithId,
  ReturnUserByEmail,
  updateUserInfos,
} = require("../../controllers");
const UpdateUser = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(422).send({
      msg: "Malformed Request! Missing userId in your request's header",
    });
  }
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const userdata = req.body;
  const response = await updateUserInfos(userId, userdata);
  if (response === 4) {
    return res.status(400).send({
      msg: "Field Malformed! please check the documentation for more detail ...",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Sever Error Try Again later..." });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No user found with that id..." });
  }
  return res.status(200).send(response);
};
const GetUserByEmail = async (req, res) => {
  const userEmail = req.params.userEmail;
  if (!userEmail) {
    return res.status(422).send({
      msg: "Malformed Request! Missing userEmail in your request's header",
    });
  }
  const response = await ReturnUserByEmail(userEmail);
  if (response === 8) {
    return res.status(400).send({
      msg: "Email Malformed! please check the documentation for more detail ...",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Sever Error Try Again later..." });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No user found with that id..." });
  }
  return res.status(200).send(response);
};

const GetUserById = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(422).send({
      msg: "Malformed Request! Missing userId in your request's header",
    });
  }
  const response = await ReturnUserWithId(userId);
  if (response === 4) {
    return res.status(400).send({
      msg: "Field Malformed! please check the documentation for more detail ...",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Sever Error Try Again later..." });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No user found with that id..." });
  }
  return res.status(200).send(response);
};
const DeleteUSerById = async (req, res) => {
  const id = req.params.userId;
  if (!id) {
    return response.status(422).send({
      msg: "Malformed Request! Missing userId in your request's header",
    });
  }
  const response = await RemoveUserFromDB(id);
  if (response === 6) {
    return res.status(400).send({
      msg: "Impossible to Delete! please check the documentation for more detail ...",
    });
  }
  if (response === 0) {
    return res.status(500).send({ msg: "Sever Error Try Again later..." });
  }
  if (response === 2) {
    return res
      .status(404)
      .send({ msg: "Not-found! No user found with that id..." });
  }
  return res.status(200).send(response);
};

const CreateNewuser = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const userData = req.body;

  const data = await AddUserToDatabase(userData);
  if (data === 7) {
    return res.status(400).send({
      msg: "Password Strenght does not stisfied our requirement! please check the documentation for more detail ...",
    });
  }
  if (data === 6) {
    return res.status(400).send({
      msg: "Impossible to Create! please check the documentation for more detail ...",
    });
  }
  if (data === 8) {
    return res.status(400).send({
      msg: "Impossible to Create!Email Malformed please check the documentation for more detail ...",
    });
  }
  if (data === 0) {
    return res.status(500).send({ msg: "Sever Error Try Again later..." });
  }
  return res.status(200).send(data);
};
const GetPasswordHash = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).send({
      msg: "Malformed-Request: Missing Body in your request",
    });
  }
  const { password } = req.body;
  const data = await ReturnHashedpassword(password);
  if (data === 7) {
    return res.status(400).send({
      msg: "Password Strenght does not stisfied our requirement! please check the documentation for more detail ...",
    });
  }
  return res.status(200).send(data);
};

const GetAllUsers = async (req, res) => {
  const response = await ReturnAllusers();
  if (response === 0) {
    return res.status(500).send({ msg: "Sever Error Try Again later..." });
  }
  return res.status(200).send(response);
};

module.exports = {
  GetAllUsers,
  GetPasswordHash,
  CreateNewuser,
  DeleteUSerById,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
};

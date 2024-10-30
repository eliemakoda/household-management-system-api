const {
  hashUserPassword,
  UpdateUserData,
  deleteUserById,
  GetUserById,
  GetUserByEMail,
  GetAllUsers,
  CreateUser,
} = require("../../models");
const {
  hashPassword,
  verifyPassword,
  validatePassword,
} = require("../../../utils");

const updateUserInfos = async (userId, userData) => {
  const parseId = parseInt(userId, 10);
  if (isNaN(parseId)) {
    return 4;
  }
  const updatedUser = await UpdateUserData(parseId, userData);
  return updatedUser;
};
const ReturnUserByEmail = async (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 8;
  }
  const result = await GetUserByEMail(email);
  return result;
};

const ReturnUserWithId = async (userId) => {
  const parseId = parseInt(userId, 10);
  if (isNaN(parseId)) {
    return 4;
  }
  const targetUser = await GetUserById(parseId);
  return targetUser;
};

const RemoveUserFromDB = async (userId) => {
  const parseId = parseInt(userId, 10);
  if (isNaN(parseId)) {
    return 4;
  }
  const deletedUser = await deleteUserById(parseId);
  return deletedUser;
};
const AddUserToDatabase = async (newUser) => {
  //hash the password
  const isPasswordStrong = validatePassword(newUser.motDePasse);
  if (isPasswordStrong === false) {
    return 7;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newUser.email)) {
    return 8;
  }
  newUser.motDePasse = await hashPassword(newUser.motDePasse);

  const response = await CreateUser(newUser);
  return response;
};

const ReturnHashedpassword = async (password) => {
  const isPasswordStrong = await validatePassword(password);
  if (isPasswordStrong === false) {
    return 7;
  }
  const response = await hashUserPassword(password);
  return response;
};

const ReturnAllusers = async () => {
  const response = await GetAllUsers();
  return response;
};

module.exports = {
  ReturnAllusers,
  ReturnHashedpassword,
  AddUserToDatabase,
  RemoveUserFromDB,
  ReturnUserWithId,
  ReturnUserByEmail,
  updateUserInfos,
};

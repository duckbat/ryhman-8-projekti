import { validationResult } from "express-validator";
import { addUser, fetchUsers, fetchUsersID } from "../models/user-model.mjs";

const postUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // details about errors:
    console.log(errors.array());
    return res.status(400).json({ message: "invalid input fields" });
  }
  const newUserId = await addUser(req.body);
  res.status(201).json({ message: "user added", user_id: newUserId });
};

// Following functions are just stubs at the moment

const getUsers = async (req, res) => {
  const users = await fetchUsers();

  res.json(users);
};

const getUserById = async (req, res) => {
  const usersID = await fetchUsersID;

  res.json(usersID);
};

const putUser = (req, res) => {
  res.json({ message: "putUser" });
};

const deleteUser = (req, res) => {
  res.json({ message: "deleteUser" });
};

export { getUsers, getUserById, postUser, putUser, deleteUser };

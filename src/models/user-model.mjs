import { promisePool, pool } from "../utils/database.mjs";

/**
 * Fetch user from database based on user name/password pair
 *
 * @param {object} userCreds - Contains {username, password} properties
 * @returns user object
 */
const login = async (userCreds) => {
  try {
    const sql = `SELECT UserID, Username, Email, UserID, UserLevel
                 FROM Users WHERE username = ? AND password = ?`;
    const params = [userCreds.username, userCreds.password];
    const result = await promisePool.query(sql, params);
    const [rows] = result; // first item in result array is the data rows
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    return { error: e.message };
  }
};

/**
 * Fetches all users from the database.
 * @returns {Promise<Array>} An array containing user data.
 */
const fetchAllUsers = async () => {
  try {
    const result = await promisePool.query("SELECT * FROM Users");
    const [rows] = result;
    return rows;
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Fetches user data based on the provided user ID.
 * @param {number} id - The ID of the user to fetch.
 * @returns {Promise<Object>} An object containing user data.
 */
const fetchUserID = async (id) => {
  try {
    const sql = `SELECT UserID, UserLevel, Username, Password, Email, Phone
                 FROM Users
                 WHERE UserID=?`;
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows[0];
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Adds a new user to the database.
 * @param {Object} user - The user object to be added.
 * @param {number} user.UserLevel - The user level.
 * @param {string} user.Username - The username.
 * @param {string} user.Password - The user password.
 * @param {string} user.Email - The user email.
 * @param {string} user.Phone - The user phone number.
 * @returns {Promise<Object>} An object containing the ID of the newly added user.
 */
const addUser = async (user) => {
  try {
    const sql = `INSERT INTO Users (UserLevel, Username, Password, Email, Phone)
                 VALUES (?, ?, ?, ?, ?)`;
    const params = [
      user.UserLevel,
      user.Username,
      user.Password,
      user.Email,
      user.Phone
    ];
    const result = await promisePool.query(sql, params);
    return { UserID: result[0].insertId };
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Deletes a user from the database based on the provided user ID.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<Object>} An object containing a message indicating the success of the deletion.
 */
const deleteUser = async (id) => {
  try {
    const sql = 'DELETE FROM Users WHERE UserID = ?';
    const params = [id];
    await promisePool.query(sql, params);
    return { message: 'User deleted successfully' };
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Updates a user in the database based on the provided user ID.
 * @param {number} id - The ID of the user to update.
 * @param {Object} user - The updated user object.
 * @param {number} user.UserLevel - The updated user level.
 * @param {string} user.Username - The updated username.
 * @param {string} user.Password - The updated user password.
 * @param {string} user.Email - The updated user email.
 * @param {string} user.Phone - The updated user phone number.
 * @returns {Promise<Object>} An object containing a message indicating the success of the update.
 */
const updateUser = async (id, user) => {
  try {
    const sql = `UPDATE Users
                 SET UserLevel = ?, Username = ?, Password = ?, Email = ?, Phone = ?
                 WHERE UserID = ?`;
    const params = [
      user.UserLevel,
      user.Username,
      user.Password,
      user.Email,
      user.Phone,
      id,
    ];  
    await promisePool.query(sql, params);
    return { message: 'User updated successfully' };
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

export { login, fetchAllUsers, fetchUserID, addUser, deleteUser, updateUser };

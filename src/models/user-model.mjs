import { promisePool } from "../utils/database.mjs";

/**
 * Fetch user from database based on user name/password pair
 *
 * @param {object} userCreds - Contains {username, password} properties
 * @returns user object
 */
const login = async (userCreds) => {
  try {
    const sql = `SELECT UserID, Username, Email, UserLevel
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

const fetchUsers = async () => {
  try {
    const sql = `SELECT UserID, Username, Email, UserLevel
                 FROM Users`;
    const result = await promisePool.query(sql);
    const [rows] = result; // first item in result array is the data rows
    return rows;
  } catch (e) {
    console.error("error", e.message);
    return { error: e.message };
  }
};

const fetchUsersID = async (id) => {
  try {
    const sql = `SELECT UserID, Username, Email, UserLevel
                 FROM Users WHERE UserID=?`;
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    console.log("rows", rows);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    return { error: e.message };
  }
}

/**
 * Creates a new user in the database
 *
 * @param {object} user data
 * @returns {number} - id of the inserted user in db
 */
const addUser = async (user) => {
  try {
    const sql = `INSERT INTO Users (Username, Email, Password, UserLevel)
                VALUES (?, ?, ?, ?)`;
    // user level id defaults to 2 (normal user)
    const params = [user.username, user.email, user.password, 1];
    const result = await promisePool.query(sql, params);
    return result[0].insertId;
  } catch (e) {
    console.error("error", e.message);
    return { error: e.message };
  }
};

export { login, addUser, fetchUsers, fetchUsersID };

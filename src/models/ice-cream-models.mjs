/**
 * Fetches all ice cream records from the database.
 * @returns {Promise<Array>} An array containing ice cream data.
 */
const fetchAllIceCream = async () => {
  try {
    const result = await promisePool.query("SELECT * FROM IceCream");
    const [rows] = result;
    return rows;
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Fetches ice cream data based on the provided ice cream ID.
 * @param {number} id - The ID of the ice cream to fetch.
 * @returns {Promise<Object>} An object containing ice cream data.
 */
const fetchIceCreamID = async (id) => {
  try {
    const sql = `SELECT IceCreamID, IceCreamName, IceCreamDescription, IceCreamDietary, IceCreamPrice, IceCreamImage
                 FROM IceCream
                 WHERE IceCreamID=?`;
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows[0];
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Adds a new ice cream record to the database.
 * @param {Object} iceCream - The ice cream object to be added.
 * @param {string} iceCream.IceCreamName - The name of the ice cream.
 * @param {string} iceCream.IceCreamDescription - The description of the ice cream.
 * @param {string} iceCream.IceCreamDietary - The dietary information of the ice cream.
 * @param {number} iceCream.IceCreamPrice - The price of the ice cream.
 * @param {string} iceCream.IceCreamImage - The image URL of the ice cream.
 * @returns {Promise<Object>} An object containing the ID of the newly added ice cream record.
 */
const addIceCream = async (iceCream) => {
  try {
    const sql = `INSERT INTO IceCream (IceCreamName, IceCreamDescription, IceCreamDietary, IceCreamPrice, IceCreamImage)
                 VALUES (?, ?, ?, ?, ?)`;
    const params = [
      iceCream.IceCreamName,
      iceCream.IceCreamDescription,
      iceCream.IceCreamDietary,
      iceCream.IceCreamPrice,
      iceCream.IceCreamImage
    ];
    const result = await promisePool.query(sql, params);
    return { IceCreamID: result[0].insertId };
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Deletes an ice cream record from the database based on the provided ice cream ID.
 * @param {number} id - The ID of the ice cream to delete.
 * @returns {Promise<Object>} An object containing a message indicating the success of the deletion.
 */
const deleteIceCreamID = async (id) => {
  try {
    const sql = 'DELETE FROM IceCream WHERE IceCreamID = ?';
    const params = [id];
    await promisePool.query(sql, params);
    return { message: 'Ice cream deleted successfully' };
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

/**
 * Updates an ice cream record in the database based on the provided ice cream ID.
 * @param {number} id - The ID of the ice cream to update.
 * @param {Object} iceCream - The updated ice cream object.
 * @param {string} iceCream.IceCreamName - The updated name of the ice cream.
 * @param {string} iceCream.IceCreamDescription - The updated description of the ice cream.
 * @param {string} iceCream.IceCreamDietary - The updated dietary information of the ice cream.
 * @param {number} iceCream.IceCreamPrice - The updated price of the ice cream.
 * @param {string} iceCream.IceCreamImage - The updated image URL of the ice cream.
 * @returns {Promise<Object>} An object containing a message indicating the success of the update.
 */
const updateIceCream = async (id, iceCream) => {
  try {
    const sql = `UPDATE IceCream
                 SET IceCreamName = ?, IceCreamDescription = ?, IceCreamDietary = ?, IceCreamPrice = ?, IceCreamImage = ?
                 WHERE IceCreamID = ?`;
    const params = [
      iceCream.IceCreamName,
      iceCream.IceCreamDescription,
      iceCream.IceCreamDietary,
      iceCream.IceCreamPrice,
      iceCream.IceCreamImage,
      id
    ];
    await promisePool.query(sql, params);
    return { message: 'Ice cream updated successfully' };
  } catch (e) {
    console.error("Error", e.message);
    return { error: e.message };
  }
};

export { fetchAllIceCream, fetchIceCreamID, addIceCream, deleteIceCreamID, updateIceCream };

/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable new-cap */

const express = require('express');
const router = express.Router();
const adminController = require('./controllers/adminController');

// Admin dashboard
router.get('/', adminController.dashboard);

// Add, edit, delete users
router.get('/users', adminController.viewUsers);
router.post('/users/add', adminController.addUser);
router.post('/users/edit/:userId', adminController.editUser);
router.post('/users/delete/:userId', adminController.deleteUser);

// Add, edit, delete ice cream items
router.get('/icecream', adminController.viewIceCream);
router.post('/icecream/add', adminController.addIceCream);
router.post('/icecream/edit/:itemId', adminController.editIceCream);
router.post('/icecream/delete/:itemId', adminController.deleteIceCream);

module.exports = router;

// admin-router.mjs
import express from 'express';
import path from 'path';
import { addIceCream } from '../models/ice-cream-model.mjs'; // Adjust the import path

const router = express.Router();

router.get('/add-icecream', (req, res) => {
  res.render('admin/add-icecream', {
    title: 'Admin - Add Ice Cream',
    js: [],
    data: {},
  });
});

router.post('/add-icecream', async (req, res) => {
  // Handle form submission and add ice cream to the database
  try {
    const { name, description, /* Add other fields */ } = req.body;

    // Handle file upload
    const { file } = req;

    // Assuming addIceCream function returns the new ice cream's ID
    const iceCreamId = await addIceCream({
      name,
      description,
      // Add other fields here
      image: file ? file.path : null, // Save the file path to the database
    });

    res.redirect('/admin/add-icecream'); // Redirect to the add-icecream page
  } catch (error) {
    console.error('Error adding ice cream:', error);
    res.status(500).send('Error adding ice cream');
  }
});

export default router;

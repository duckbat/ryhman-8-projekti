import express from 'express';
import { fetchAllIceCream, fetchIceCreamID, addIceCream, deleteIceCreamID, updateIceCream } from '../models/ice-cream-models.mjs';

const router = express.Router();



router.post('/', async (req, res) => {
  try {
    const iceCreamData = req.body;
    const result = await addIceCream(iceCreamData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const iceCreamId = req.params.id;
    const result = await deleteIceCreamID(iceCreamId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const iceCreamId = req.params.id;
    const iceCreamData = req.body;
    const result = await updateIceCream(iceCreamId, iceCreamData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

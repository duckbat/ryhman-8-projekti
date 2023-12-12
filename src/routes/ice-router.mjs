import express from 'express';
import {
  deleteIceCream,
  getIceCream,
  getIceCreamById,
  postIceCream,
  putIceCream,
} from '../controllers/ice-cream-controller.mjs';



const iceRouter = express.Router();

// router specific middleware
//iceCreamRouter.use(logger);

// TODO: check and add authentication where needed
iceRouter


iceRouter.route('/:id').get(getIceCream).put(putIceCream).delete(deleteIceCream);

export default iceRouter;

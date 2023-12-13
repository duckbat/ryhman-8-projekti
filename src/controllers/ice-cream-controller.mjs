import {validationResult} from "express-validator";
import {fetchAllIceCream, fetchIceCreamById, addIceCream} from "../models/ice-cream-models.mjs";

const getIceCream = async (req, res) => {
    const iceCreams = await fetchAllIceCream();
    res.json(iceCreams);
};

const getIceCreamById = async (req, res) => {
    const iceCream = await fetchIceCreamById(req.params.id);
    // error handling 
    if (result) {
        if (result.error){
            res.status(500);
        }
        res.json(result);
    } else {
        res.status(404).json({message: "not found"});
    }

    res.json(iceCream);
}


export {getIceCream, getIceCreamById, postIceCream, putIceCream, deleteIceCream};

import express from "express";
import {
  ADD_LOCATION,
  GET_LOCATIONS,
  GET_LOCATION_BY_ID,
  DELETE_LOCATION,
  UPDATE_LOCATION,
} from "../controllers/locations.js";

const router = express.Router();

router.post("/locations", ADD_LOCATION);
router.get("/locations", GET_LOCATIONS);
router.get("/locations/:id", GET_LOCATION_BY_ID);
router.put("/locations/:id", UPDATE_LOCATION);
router.delete("/locations/:id", DELETE_LOCATION);

export default router;

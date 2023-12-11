import express from "express";
import {
  ADD_LOCATION,
  GET_LOCATIONS,
  GET_LOCATION_BY_ID,
  DELETE_LOCATION,
  UPDATE_LOCATION,
} from "../controllers/locations.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/locations", auth, ADD_LOCATION);
router.get("/locations", auth, GET_LOCATIONS);
router.get("/locations/:id", GET_LOCATION_BY_ID);
router.put("/locations/:id", auth, UPDATE_LOCATION);
router.delete("/locations/:id", auth, DELETE_LOCATION);

export default router;

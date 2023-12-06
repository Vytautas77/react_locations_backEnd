import mongoose from "mongoose";
import LocationModel from "../models/locations.js";

const ADD_LOCATION = async (req, res) => {
  const location = new LocationModel({
    title: req.body.title,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    location_photo_url: req.body.location_photo_url,
    description: req.body.description,
    location_id: req.body.location_id,
  });
  const response = await location.save();

  return res.status(200).json({ response });
};

const GET_LOCATIONS = async (req, res) => {
  const locations = await LocationModel.find();
  return res.status(200).json({ locations });
};
const GET_LOCATION_BY_ID = async (req, res) => {
  const locations = await LocationModel.findOne({ _id: req.params.id });
  return res.status(200).json({ locations });
};

const UPDATE_LOCATION = async (req, res) => {
  try {
    const response = await LocationModel.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    return res.status(200).json({ status: "Location was update", response });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
};

const DELETE_LOCATION = async (req, res) => {
  const locations = await LocationModel.deleteOne({ _id: req.params.id });
  return res.status(200).json({ locations });
};

export {
  ADD_LOCATION,
  GET_LOCATIONS,
  GET_LOCATION_BY_ID,
  DELETE_LOCATION,
  UPDATE_LOCATION,
};

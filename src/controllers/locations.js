import LocationModel from "../models/locations.js";

const ADD_LOCATION = async (req, res) => {
  try {
    const location = new LocationModel({
      title: req.body.title,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      location_photo_url: req.body.location_photo_url,
      description: req.body.description,
      location_id: req.body.location_id,
      owner_id: req.body.userId,
    });
    const response = await location.save();

    return res.status(200).json({ response });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
};

const GET_LOCATIONS = async (req, res) => {
  try {
    const locations = await LocationModel.find({ owner_id: req.body.userId });
    return res.status(200).json({ locations });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
};

const GET_LOCATION_BY_ID = async (req, res) => {
  try {
    const location = await LocationModel.findOne({ _id: req.params.id });

    if (location) {
      return res.status(200).json({ location });
    } else {
      return res.status(404).json({ response: "Location not found" });
    }
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
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
  try {
    const response = await LocationModel.deleteOne({ _id: req.params.id });
    return res.status(200).json({ response });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
};

export {
  ADD_LOCATION,
  GET_LOCATIONS,
  GET_LOCATION_BY_ID,
  DELETE_LOCATION,
  UPDATE_LOCATION,
};

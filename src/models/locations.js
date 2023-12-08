import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  title: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  location_photo_url: { type: String, required: true },
  description: { type: String, required: true },
  location_id: { type: String },
});

export default mongoose.model("Location", locationSchema);

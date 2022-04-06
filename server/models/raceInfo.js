const mongoose = require("mongoose");

const raceInfoSchema = new mongoose.Schema({
  track: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  nolaps: {
    type: String,
    required: true,
  },
  km: {
    type: String,
    required: true,
  },
  fastestLap: {
    type: String,
  },
  startTime: {
    type: String,
  },
  duration: {
    type: String,
  },
  date: {
    type: String,
  },
});

const RaceInfoModel = mongoose.model("raceInfo", raceInfoSchema);
module.exports = RaceInfoModel;

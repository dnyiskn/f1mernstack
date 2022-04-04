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
});

const RaceInfoModel = mongoose.model("raceInfo", raceInfoSchema);
module.exports = RaceInfoModel;

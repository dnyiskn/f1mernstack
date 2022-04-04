const express = require("express")
const app = express()
const mongoose = require('mongoose')
const RaceInfoModel = require('./models/raceInfo')
const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://dnyiskn:mernstack@cluster0.igf9z.mongodb.net/formulaOne?retryWrites=true&w=majority")

app.get("/getRaceInfo", (req, res) => {
    RaceInfoModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createRaceInfo", async (req, res) => {
    const raceInfo = req.body
    const newRaceInfo = new RaceInfoModel(raceInfo);
    await newRaceInfo.save();

    res.json(raceInfo);
})

app.listen(3001, () => {
    console.log("Server Running");
})
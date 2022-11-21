require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dogtrails");

const dogTrailsSchema = new mongoose.Schema(
  {
    //firebase_id: {type: String},
    //description: {type: String, default: null},
    title: {type: String},
    trailName: {type: String},
    location: {lat: Number, lng: Number},
    length: {type: Number, default: 1},
    traffic: {type: String, default: "Moderate"},
    offLeash: {type: Boolean, default: false}
  },
  {collection : 'dogTrails'},
  { timestamps: true } // will automatically create and set `createdAt` and `updatedAt` timestamps
);

const dogTrailsDB = new mongoose.model('dogtrail', dogTrailsSchema);

let getAllTrails = async (cb) => {
  const docs = await dogTrailsDB.find()
    .exec((err, docs) => {
      cb(err, docs);
    });
}

module.exports.getAllTrails = getAllTrails;

const dogTrailsDB = require("../../database/db.js");

const getTrails = (req, res) => {
  dogTrailsDB.getAllTrails((err, docs) => {
    if (err) {
      console.log(err);
      res.status(444).send({msg: 'error'})
    } else {
      res.status(200).send(docs);
    }
  });
}

module.exports = getTrails;

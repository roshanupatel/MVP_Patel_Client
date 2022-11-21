const dogTrailsDB = require("../../database/db.js");

const loginUser = (req, res) => {
  res.status(200).send({msg: "hello"});
}

module.exports = loginUser;
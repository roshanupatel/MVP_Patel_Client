const dogTrailsDB = require("../../database/db.js");

const signUpUser = (req, res) => {
  res.status(200).send({msg: "hello"});
}

module.exports = signUpUser;
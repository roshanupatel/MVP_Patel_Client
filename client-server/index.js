
const express = require("express");
const router = require("./routes.js");

const app = express();

app.use(express.json());

app.use('/be', router);

app.listen(3001, () => {
  console.log(`server listening at 3001`);
})

const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/index");
routes(app);

app.use("/", express.static("./client/build"));

const port = 3000;
app.listen(port, () => {
  console.log(`Server has been started on port ${port}...`);
});

exports.app = app;

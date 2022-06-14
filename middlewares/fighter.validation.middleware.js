const { fighter } = require("../models/fighter");

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during creation
  const fighterKeys = Object.keys(fighter);
  fighterKeys.splice(0, 1);
  fighterKeys.splice(1, 1);
  console.log(fighterKeys);
  const errorMessage = {
    error: true,
    message: "",
  };
  for (key of fighterKeys) {
    if (!req.body[key]) {
      errorMessage.message = "Some fields are empty, please fill it";
      res.status(400).send(errorMessage);
      return;
    }
  }

  if (!req.body) {
    errorMessage.message = "Request data is empty";
    res.status(400).send(errorMessage);
  } else if (req.body.power < 1 || req.body.power > 100) {
    errorMessage.message = "Power parameter should be between 1 and 100";
    res.status(400).send(errorMessage);
  } else if (req.body.defense < 1 || req.body.defense > 10) {
    errorMessage.message = "Defense parameter should be between 1 and 10";
    res.status(400).send(errorMessage);
  } else if (req.body.health < 80 || req.body.health > 120) {
    errorMessage.message = "Health parameter should be between 80 and 120";
    res.status(400).send(errorMessage);
  } else {
    next();
  }
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during update
  const errorMessage = {
    error: true,
    message: "",
  };

  if (Object.keys(req.body).length == 0) {
    errorMessage.message = "Nothing to change";
    res.status(400).send(errorMessage);
  } else {
    next();
  }
  next();
};

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;

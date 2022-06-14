const { keys } = require("lodash");
const { user } = require("../models/user");
const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation

  const userKeys = Object.keys(user).slice(1, 6);

  const errorMessage = {
    error: true,
    message: "",
  };
  console.log(req.body);

  for (key of userKeys) {
    if (!req.body.hasOwnProperty(key)) {
      errorMessage.message = "Some fields are empty, please fill it";
      res.status(400).send(errorMessage);
      return;
    }
  }

  if (!req.body) {
    errorMessage.message = "Request data is empty";
    res.status(400).send(errorMessage);
  } else if (!req.body.email.endsWith("@gmail.com")) {
    errorMessage.message = "Email must be registered only on @gmail.com ";
    res.status(400).send(errorMessage);
  } else if (!req.body.phoneNumber.startsWith("+380")) {
    errorMessage.message = 'Phone number must starts with "+380" ';
    res.status(400).send(errorMessage);
  } else if (req.body.password.length < 3) {
    errorMessage.message = "Password should be longer than 3 symbols";
    res.status(400).send(errorMessage);
  } else {
    next();
  }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const errorMessage = {
    error: true,
    message: "",
  };

  if (Object.keys(req.body).length == 0) {
    errorMessage.message = "Request data is empty";
    res.status(400).send(errorMessage);
  } else {
    next();
  }
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;

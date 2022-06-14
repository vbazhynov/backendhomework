const { Router } = require("express");
const UserService = require("../services/userService");
const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware");
const { responseMiddleware } = require("../middlewares/response.middleware");
const { BaseRepository } = require("../repositories/baseRepository");
const { UserRepository } = require("../repositories/userRepository");
const { addUser } = require("../services/userService");

const router = Router();
// TODO: Implement route controllers for user

router.post(
  "/",
  createUserValid,
  (req, res, next) => {
    try {
      const data = UserService.addUser(req, res);
      res.data = data;
    } catch (err) {
      err.name = 400;
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/",
  (req, res, next) => {
    try {
      const users = UserService.getAllUsers();
      res.data = users;
    } catch (err) {
      err.name = 404;
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/:id",
  (req, res, next) => {
    try {
      const user = UserService.getUserById(req);
      res.data = user;
    } catch (err) {
      err.name = 404;
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.put(
  "/:id",
  updateUserValid,
  (req, res, next) => {
    try {
      const user = UserService.changeUserData(req);
      res.data = user;
    } catch (err) {
      err.name = 404;
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.delete(
  "/:id",
  (req, res, next) => {
    try {
      const user = UserService.deleteUserById(req);
      res.data = user;
    } catch (err) {
      err.name = 404;
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);
module.exports = router;

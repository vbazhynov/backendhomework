const { Router } = require("express");
const AuthService = require("../services/authService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const { login } = require("../services/authService");

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      // TODO: Implement login action (get the user if it exist with entered credentials)

      data = AuthService.login(req.body);
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

module.exports = router;

const { Router } = require("express");
const FighterService = require("../services/fighterService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const {
  createFighterValid,
  updateFighterValid,
} = require("../middlewares/fighter.validation.middleware");

const router = Router();

// TODO: Implement route controllers for fighter

router.post(
  "/",
  createFighterValid,
  (req, res, next) => {
    try {
      const data = FighterService.addFighter(req, res);
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
      const data = FighterService.getAllFighters();
      res.data = data;
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
      const data = FighterService.getFighterById(req);
      res.data = data;
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
  updateFighterValid,
  (req, res, next) => {
    try {
      const data = FighterService.changeFighterData(req);
      res.data = data;
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
      const data = FighterService.deleteFighterById(req);
      res.data = data;
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

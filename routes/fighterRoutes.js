const { Router } = require("express");
const FighterService = require("../services/fighterService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const {
  createFighterValid,
  updateFighterValid,
} = require("../middlewares/fighter.validation.middleware");

const router = Router();

// TODO: Implement route controllers for fighter

router.get("/", (req, res) => {
  res.send(fighterRepository.getAll());
});

router.get("/:id", (req, res) => {
  res.send(fighterRepository.get());
});

module.exports = router;

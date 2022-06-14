const { FighterRepository } = require("../repositories/fighterRepository");

class FighterService {
  // TODO: Implement methods to work with fighters

  add(req, res, next) {
    UserRepository.create({ ...req.body });
  }
}

module.exports = new FighterService();

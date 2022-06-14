const { FighterRepository } = require("../repositories/fighterRepository");

class FighterService {
  // TODO: Implement methods to work with fighters

  addFighter(req, res) {
    if (this.search({ name: req.body.name })) {
      throw Error("Fighter with this name already exist!!");
    }
    req.body.health = 100;
    return FighterRepository.create(req.body);
  }

  search(search) {
    const item = FighterRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  getAllFighters() {
    const users = FighterRepository.getAll();
    if (users.length === 0) {
      throw Error("Database is empty!");
    } else {
      return users;
    }
  }

  getFighterById(req) {
    const user = FighterRepository.getOne({ id: req.params.id });
    if (!user) {
      throw Error("There is no such User in database");
    } else {
      return user;
    }
  }

  deleteFighterById(req) {
    const user = FighterRepository.delete(req.params.id);
    if (!user) {
      throw Error("There is no such User in database");
    } else {
      return user;
    }
  }

  changeFighterData(req) {
    const user = FighterRepository.update(req.params.id, req.body);
    if (!user) {
      throw Error("There is no such User in database");
    } else {
      return user;
    }
  }
}

module.exports = new FighterService();

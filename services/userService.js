const { UserRepository } = require("../repositories/userRepository");

class UserService {
  // TODO: Implement methods to work with user

  addUser(req, res) {
    if (this.search({ email: req.body.email })) {
      throw Error("User with this email already exist!!");
    }

    if (this.search({ phoneNumber: req.body.phoneNumber })) {
      throw Error("User with this Phone number already exist!!");
    }
    return UserRepository.create(req.body);
  }

  search(search) {
    const item = UserRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  getAllUsers() {
    const users = UserRepository.getAll();
    if (users.length === 0) {
      throw Error("Database is empty!");
    } else {
      return users;
    }
  }

  getUserById(req) {
    const user = UserRepository.getOne({ id: req.params.id });
    if (!user) {
      throw Error("There is no such User in database");
    } else {
      return user;
    }
  }

  deleteUserById(req) {
    const user = UserRepository.delete(req.params.id);
    if (!user) {
      throw Error("There is no such User in database");
    } else {
      return user;
    }
  }

  changeUserData(req) {
    const user = UserRepository.update(req.params.id, req.body);
    if (!user) {
      throw Error("There is no such User in database");
    } else {
      return user;
    }
  }
}

module.exports = new UserService();

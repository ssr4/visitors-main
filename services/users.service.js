const Users = require("../models/Users")

class UsersService {
  getUsers() {
    return new Promise((res, rej) => {
      // raw надо для правильной обработки возвращаемых значений
      try {
        const users = Users.findAll({
          raw: true,
        })
        res(users)
      } catch (err) {
        console.log(err)
        rej(false)
      }
    })
  }
}

module.exports = new UsersService()

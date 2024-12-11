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

  createUser(data) {
    return new Promise((res, rej) => {
      try {
        const users = Users.create({
          full_name: data.fullName,
          passport_data: data.passport,
        })
        res(users)
      } catch (error) {
        console.log(error)
        rej(error)
      }
    })
  }

  updateUser(data) {
    return new Promise((res, rej) => {
      try {
        const users = Users.update(
          {
            full_name: data.fullName,
          },
          {
            where: {
              passport_data: data.passport,
            },
          }
        )
        console.log(users, data)
        res(users)
      } catch (error) {
        console.log(error)
        rej(error)
      }
    })
  }
}

module.exports = new UsersService()

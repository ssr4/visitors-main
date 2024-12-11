const UsersService = require("../services/users.service.js")

class UsersController {
  async getUsers(req, res) {
    if (req.body) {
      console.log("Users: ", req.body)
    } else if (!req.users)
      return res.status(404).send({ message: "User not found!" })
    return res.send({ status: "success" })
  }

  async createUser(req, res) {
    if (req.body.passport) {
      const user = req.users.find(
        (item) => item.passport_data === req.body.passport
      )
      if (user) {
        try {
          const result = await UsersService.updateUser(req.body)
          return res.send(result)
        } catch (error) {
          console.log(error)
        }
      }
      req.users[req.body.passport] = req.body
      try {
        const result = await UsersService.createUser(req.body)
        return res.send(result)
      } catch (error) {
        res.status(500).send(error)
      }
    } else res.status(400).send({ message: "Bad request" })
  }

  async updateUser(req, res) {}
}

module.exports = new UsersController()

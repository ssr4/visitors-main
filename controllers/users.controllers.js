const UsersService = require("../services/users.service.js")

class UsersController {
  async getUsers(req, res) {
    if (req.body.id_user) {
      console.log(req.body.id_user)
    } else if (!req.users)
      return res.status(404).send({ message: "User not found!" })
    return res.status(200).send({ data: "loh" })
  }
}

module.exports = new UsersController()

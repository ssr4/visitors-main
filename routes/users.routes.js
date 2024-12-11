const usersService = require("../services/users.service.js")

const express = require("express"),
  router = express.Router(),
  UsersController = require("../controllers/users.controllers.js"),
  UsersService = require("../services/users.service.js")

// тут обернуть в errorHandler можно
router.use(async (req, res, next) => {
  // сразу при  инициализации получаем всех юзеров
  let data = await UsersService.getUsers()
  if (data) {
    req.users = data
    next()
  } else res.status(500).send({ message: "Error while getting users" })
})

router.route("/").get(UsersController.getUsers).post(UsersController.createUser)

module.exports = router

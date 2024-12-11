const usersService = require("../services/users.service.js")

const express = require("express"),
  router = express.Router(),
  UsersController = require("../controllers/users.controllers.js"),
  UsersService = require("../services/users.service.js")

// тут обернуть в errorHandler можно
router.use(async (req, res, next) => {
  let data = await usersService.getUsers()
  console.log(data)
  // сразу при  инициализации получаем всех юзеров
  if (data) {
    req.users = data
    next()
  } else res.status(500).send({ message: "Error while getting users" })
})

router.route("/").get(UsersController.getUsers)

module.exports = router

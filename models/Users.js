const Sequelize = require("sequelize")
const db = require("../controllers/db.js")

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    schema: "learning",
  }
)

module.exports = Users

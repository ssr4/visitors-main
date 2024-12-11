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
    full_name: {
      type: Sequelize.CHAR,
      allowNull: false,
      primaryKey: true,
    },
    passport_data: {
      type: Sequelize.CHAR,
      allowNull: false,
    },
  },
  {
    schema: "learning",
  }
)

module.exports = Users

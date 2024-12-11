const Sequelize = require("sequelize")

module.exports = new Sequelize("postgres", "postgres", "postgres", {
  dialect: "postgres",
  port: 5432,
  host: "localhost",
  // define: {
  //   timestamps: false,
  // },
})

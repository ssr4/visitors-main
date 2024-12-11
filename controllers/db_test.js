const Sequelize = require("sequelize")

class DbPostgre {
  _sequelize = null
  constructor() {
    // db-name, user, psw
    this._sequelize = new Sequelize("postgres", "postgres", "postgres", {
      dialect: "postgres",
      port: 5432,
      host: "localhost",
    })
  }

  async connectToDb() {
    try {
      await this._sequelize.authenticate()
      console.log("Connection has been established successfully.")
    } catch (error) {
      console.error("Unable to connect to the database:", error)
    }
  }

  async closeConnection() {
    try {
      await this._sequelize.close()
      console.log("Connection has been closed successfully.")
    } catch (error) {
      console.error("Occures an error while close the db connection", error)
    }
  }

  get sequelize() {
    return this._sequelize
  }
}

// class Forecast extends Sequelize.Model {}
// Forecast.init({
//   // id: {
//   //   type: Sequelize.INTEGER,
//   //   autoIncrement: true,
//   //   allowNull: false,
//   // },
//   // ks: {
//   //   type: Sequelize.INTEGER,
//   //   allowNull: false,
//   //   primaryKey: true,
//   // },
//   // dt_load: {
//   //   type: Sequelize.DATE,
//   //   allowNull: false,
//   //   primaryKey: true,
//   // },
//   // d_vrf: {},
//   // ks varchar NOT NULL,
//   // dt_load date NOT NULL,
//   // d_vrf varchar NULL,
//   // n_vrf varchar NULL,
//   // d_rf varchar NULL,
//   // n_rf varchar NULL,
//   // d_temp varchar NULL,
//   // n_temp varchar NULL,
//   // d_sh varchar NULL,
//   // n_sh varchar NULL,
//   // d_gw varchar NULL,
//   // n_gw varchar NULL,
//   // d_bi varchar NULL,
//   // n_bi varchar NULL,
// })
module.exports = new DbPostgre()

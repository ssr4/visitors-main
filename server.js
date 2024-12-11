const express = require("express"),
  app = express(),
  routes = require("./routes/index.js")
const path = require("path")

const bodyParser = require("body-parser")
const db = require("./controllers/db.js")
const PORT = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", routes)
app.use(express.static(path.join(__dirname, "public")))

// Настройка статической папки
async function startApp() {
  try {
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
    await db.authenticate()
  } catch (err) {
    console.log(err)
  }
}

startApp()

// Настройки подключения к базе данных PostgreSQL
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "visitors",
//   password: "admin",
//   port: 5432,
// })

// // Маршрут для обработки формы
// app.post("/submit", async (req, res) => {
//   const {
//     "full-name": fullName,
//     passport,
//     "passport-place": passportPlace,
//     "passport-date": passportDate,
//     "birth-place": birthPlace,
//     "birth-date": birthDate,
//     residence,
//     department,
//     job,
//     purpose,
//     "visit-date": visitDate,
//     attendant,
//     coordinator,
//   } = req.body

//   try {
//     // Вставка данных в таблицу personal_info
//     const personalInfoResult = await pool.query(
//       `INSERT INTO personal_info (full_name, passport, passport_place, passport_date, birth_place, birth_date, residence)
//       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
//       [
//         fullName,
//         passport,
//         passportPlace,
//         passportDate,
//         birthPlace,
//         birthDate,
//         residence,
//       ]
//     )

//     const personalInfoId = personalInfoResult.rows[0].id

//     // Вставка данных в таблицу visit_info с использованием полученного personal_info_id
//     await pool.query(
//       `INSERT INTO visit_info (full_name, personal_info_id, department, job, purpose, visit_date, attendant, coordinator)
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
//       [
//         fullName,
//         personalInfoId,
//         department,
//         job,
//         purpose,
//         visitDate,
//         attendant,
//         coordinator,
//       ]
//     )

//     res.send("Данные успешно отправлены и сохранены!")
//   } catch (err) {
//     console.error("Ошибка при вставке данных:", err)
//     res.status(500).send("Произошла ошибка при сохранении данных.")
//   }
// })

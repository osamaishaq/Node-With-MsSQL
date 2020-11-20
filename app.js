const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controllers/error");
const { poolPromise } = require("./util/databaseConfig");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const studentsRoute = require("./routes/students");

// app.use("/", async (req, res, next) => {
//   try {
//     console.log("HERE");
//     const pool = await poolPromise;
//     const result = await pool.request().query("SELECT * from Students");
//     console.log(result);
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/students", studentsRoute);

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

app.listen(4000);

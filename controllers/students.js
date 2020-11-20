const { poolPromise } = require("../util/databaseConfig");

exports.getAllStudents = async (req, res, next) => {
  try {
    console.log("HERE");
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * from Students");
    const data = { data: result.recordsets[0] };
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.createStudent = async (req, res, next) => {
  console.log("Body ==> ", req.body.studentData.firstName);
  const firstName = req.body.studentData.firstName;
  const lastName = req.body.studentData.lastName;
  let query = `INSERT INTO Students (FirstName, LastName) VALUES ('${firstName}', '${lastName}')`;
  try {
    console.log("HERE");
    const pool = await poolPromise;
    const result = await pool.request().query(query);
    const data = { data: result.recordsets[0] };
    console.log(result);
    res.json({ Message: "Created" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteStudent = async (req, res, next) => {
  const id = req.body.studentID;
  console.log("Body ==> ", req.body);
  try {
    console.log("HERE");
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(`DELETE FROM Students WHERE studentID = ${id}`);
    const data = { data: result.recordsets[0] };
    console.log(result);
    res.json({ Message: "Delted" });
  } catch (error) {
    console.log(error);
  }
};

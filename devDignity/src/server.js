const express = require(`express`);
const app = express();

const server = app.listen(3000, () => {
  console.log("helloworld");
});

app.set("views", _dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();

app.get("/", function (req, res) {
  res.send("dkssyud");
});

app.get("/db", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query("select * from Test", function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;

      // Don't use the connection here, it has been returned to the pool.
    });
  });

  res.send("aboutpage1");
});

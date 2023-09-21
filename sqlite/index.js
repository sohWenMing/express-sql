const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const DBSOURCE = "sqlite.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log("connected to the SQlite database.");
    db.run(
      `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text,
        email text UNIQUE,
        password TEXT
        )`,
      (err) => {
        if (err) {
          //table already created, nothing to do
        } else {
          //table being created for the first time
          const insert = `INSERT INTO 
                            user (name, email, password)
                            VALUES (?,?,?)`;
          db.run(insert, ["admin", "admin@example.com", md5("admin123456")]);
          db.run(insert, ["user", "user@example.com", md5("user123456")]);
          console.log("table created");
        }
      }
    );
  }
});

module.exports = db;

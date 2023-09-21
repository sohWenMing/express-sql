const express = require("express");
const router = express.Router();
const db = require("../sqlite");

router.get("/users", (req, res, next) => {
  const sql = "SELECT * FROM user";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ message: "success", data: rows });
    }
  });
});

router.get("/users/:id", (req, res, next) => {
  const params = [req.params.id];
  console.log(params);
  const sql = `SELECT * FROM user
               WHERE user.id = ?`;
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

module.exports = router;

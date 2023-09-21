const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("getting something at test");
});

module.exports = router;

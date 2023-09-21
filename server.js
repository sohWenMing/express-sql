const express = require("express");
const app = express();

const HTTP_PORT = 8080;
app.listen(HTTP_PORT, () => {
  console.log(`server started on ${HTTP_PORT}`);
});

require("./routes")(app);

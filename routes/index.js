const homeRoute = require("./homeRoute");
const testRoute = require("./testRoute");
const apiRoute = require("./api");

module.exports = function (app) {
  app.use("/", homeRoute, testRoute);
  app.use("/api", apiRoute);
  app.use((req, res) => {
    res.send("page was not found");
  });
};

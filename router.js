const Authentication = require("./controllers/authentication");

module.exports = app => {
  app.get("/", (req, res) => {
    console.log(req.body);
    return res.json({
      a: "aaa"
    });
  });

  app.post("/signup", Authentication.signup);
};

var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res) {
  res.render("layout", { title: "Hey", message: "Hello there!" });

  // res.redirect("/catalog");
});

module.exports = router;

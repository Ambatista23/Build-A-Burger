var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(burgerData) {
    var handlebarsObject = {
      burgers: burgerData
    };
    res.render("index", handlebarsObject);
  });
});


module.exports = router;
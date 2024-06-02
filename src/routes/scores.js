var express = require("express");
var router = express.Router();

var scoresController = require("../controllers/scoresController");

router.post("/armazenar", scoresController.cadastrarScore);

module.exports = router;

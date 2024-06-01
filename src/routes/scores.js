var express = require("express");
var router = express.Router();

var scoresController = require("../controllers/scoresController");

router.post("/cadastrarRespostas", function (req, res){
    scoresController.cadastrarRespostas(req, res);
});
module.exports = router;
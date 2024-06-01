var quizModel = require("../models/scoresModel");


function cadastrarscore(req, res) {
    
    var score = req.body.scoreServer;
   
   

    quizModel.cadastrarscore(score).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao armazenar o score do usuario! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    cadastrarscore,
 
};
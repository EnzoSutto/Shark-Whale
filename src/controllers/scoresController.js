var quizModel = require("../models/scoresModel");

function cadastrarScore(req, res) {
    var score = req.body.scoreServer;

    console.log("Score recebido:", score);

    quizModel.cadastrarScore(score).then(
        function (resultado) {
            console.log("Resultado do armazenamento:", resultado);
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("Erro ao armazenar o score do usuário:", erro);
            console.log(
                "Detalhes do erro SQL: ",
                erro.sqlMessage
            );
            res.status(500).json({ error: erro.sqlMessage });
        }
    );
}

module.exports = {
    cadastrarScore
};

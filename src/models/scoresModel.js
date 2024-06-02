var database = require("../database/config");

function cadastrarScore(pontuaçaofinal) {
    console.log("Cadastrando score no banco de dados:", pontuaçaofinal);

    var instrucao = `
        INSERT INTO scores (score) VALUES (${pontuaçaofinal});
    `;

    return database.executar(instrucao);
}

module.exports = {
    cadastrarScore
};

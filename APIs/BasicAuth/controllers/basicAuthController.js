const { validUser, validPassword } = require('../data/users');
const { decodeBasicAuth } = require('../utils/auth');

function basicAuthHandler(req, res) {
    const authHandler = req.headers['authorization'];

    if (!authHandler || !authHeader.startsWith('Basic ')) {
        return res.status(401).json({ message: 'ERRO: Autenticação não encontrada ou inválida'});
    }

    const { username, password } = decodeBasicAuth(authHeader);

    if (username === validUser && password === validPassword) {
        return res.json({
            id: 1,
            nome: "João Silveira da Silva",
            cpf: "02150892190",
            email: "joão_silveira@teste.com.br"
        });
    }

    return res.status(403).json({ message: 'ERRO: Credenciais inválidas'});
}

module.exports = { basicAuthHandler };
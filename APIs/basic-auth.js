module.exports = function (app) {
    const validUser = 'admin';
    const validPassword = 'password1234';

    app.get('/basic-auth/user', (req, res) => {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Basic ')) {
            return res.status(401).json({message: 'Autenticação não encontrada ou inválida.'});
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
        const [username, password] = credentials.split(':');

        if (username === validUser && password === validPassword) {
            return res.json({
                id: 1,
                nome: "João Silveira da Silva",
                cpf: "02250792089",
                email: "joao_silveira@teste.com.br"
            });
        }

        return res.status(403).json({message: 'Credenciais invalidas.'});
    });
}
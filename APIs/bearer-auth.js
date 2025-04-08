module.exports = function (app) {
    const validToken = '1234567890abcdef';

    app.get('/bearer-auth', (req, res) => {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token não fornecido ou inválido' });
        }

        const token = authHeader.split(' ')[1];

        if (token === validToken) {
            return res.json({
                id: 2,
                nome: "Maria Oliveira da Silva",
                cpf: "747.969.515-20",
                email: "maria.da.silva@teste.com",
                rg: "15.430.951-5",
                contato: "(84) 3691-3485"
            })
        }

        return res.status(403).json({ message: 'Acesso negado'});
    });
}
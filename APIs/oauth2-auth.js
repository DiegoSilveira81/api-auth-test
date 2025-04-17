module.exports = (app) => {
    app.post('/oauth2/token', (req, res) => {
      const { client_id, client_secret } = req.body;
  
      const validClientId = 'meu-client-id';
      const validClientSecret = 'meu-client-secret';
  
      if (client_id === validClientId && client_secret === validClientSecret) {
        const token = 'simulated-oauth2-token';
        res.json({ access_token: token, token_type: 'Bearer', expires_in: 3600 });
      } else {
        res.status(401).json({ error: 'invalid_client', error_description: 'Client authentication failed' });
      }
    });
  
    app.get('/api/oauth2/data', (req, res) => {
      const authHeader = req.headers['authorization'];
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'invalid_token' });
      }
  
      const token = authHeader.split(' ')[1];
  
      if (token === 'simulated-oauth2-token') {
        res.json([
          { nome: 'Alice Santos', cpf: '12345678909', contato: '51982700004' },
          { nome: 'Bruno Lima', cpf: '98765432100', contato: '51982700002', mother: 'Araci Lima dos Santos', city: 'Porto Alegre' },
        ]);
      } else {
        res.status(403).json({ error: 'access_denied' });
      }
    });
  };
  
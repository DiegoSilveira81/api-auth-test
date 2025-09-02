module.exports = (app) => {
    // Endpoint para obter token OAuth2
    app.post('/oauth2/token', (req, res) => {
      const { client_id, client_secret } = req.body;
  
      const validClientId = 'meu-client-id';
      const validClientSecret = 'meu-client-secret';
  
      if (client_id === validClientId && client_secret === validClientSecret) {
        const token = 'simulated-oauth2-token';
        res.json({ 
          access_token: token, 
          token_type: 'Bearer', 
          expires_in: 3600 
        });
      } else {
        res.status(401).json({ 
          error: 'invalid_client', 
          error_description: 'Client authentication failed' 
        });
      }
    });
  
    // Dados simulados completos no formato DSAR
    const userData = [
      {
        recordType: "customer",
        birthday: "1985-03-15",
        education: "Superior Completo",
        father: "João Santos Silva",
        gender: "Feminino",
        maritalStatus: "Casada",
        mother: "Maria Santos",
        age: 38,
        contactAddresses: [
          {
            createdDate: "2023-01-15T10:30:00Z",
            street: "Rua das Flores, 123, Apto 45",
            city: "Porto Alegre",
            state: "Rio Grande do Sul",
            zipCode: "90010-000",
            country: "Brasil",
            origin: "registration",
            type: "residential"
          },
          {
            createdDate: "2023-06-20T14:15:00Z",
            street: "Av. Ipiranga, 6681, Sala 1001",
            city: "Porto Alegre",
            state: "Rio Grande do Sul",
            zipCode: "90619-900",
            country: "Brasil",
            origin: "update",
            type: "commercial"
          }
        ],
        contactPhones: [
          {
            createdDate: "2023-01-15T10:30:00Z",
            number: "51982700004",
            type: "mobile",
            origin: "registration"
          },
          {
            createdDate: "2023-03-10T16:45:00Z",
            number: "5133334455",
            type: "landline",
            origin: "update"
          }
        ],
        contactEmails: [
          {
            createdDate: "2023-01-15T10:30:00Z",
            email: "alice.santos@email.com",
            origin: "registration"
          },
          {
            createdDate: "2023-04-22T09:20:00Z",
            email: "alice.trabalho@empresa.com",
            origin: "update"
          }
        ],
        document: "374.929.370-83",
        name: "Alice Santos"
      },
      {
        recordType: "customer",
        birthday: "1990-07-22",
        education: "Ensino Médio",
        father: "Carlos Lima",
        gender: "Masculino",
        maritalStatus: "Solteiro",
        mother: "Araci Lima dos Santos",
        age: 33,
        contactAddresses: [
          {
            createdDate: "2022-11-08T11:20:00Z",
            street: "Rua Coronel Vicente, 456",
            city: "Porto Alegre",
            state: "Rio Grande do Sul",
            zipCode: "90030-040",
            country: "Brasil",
            origin: "registration",
            type: "residential"
          }
        ],
        contactPhones: [
          {
            createdDate: "2022-11-08T11:20:00Z",
            number: "51982700002",
            type: "mobile",
            origin: "registration"
          }
        ],
        contactEmails: [
          {
            createdDate: "2022-11-08T11:20:00Z",
            email: "bruno.lima@email.com",
            origin: "registration"
          }
        ],
        document: "030.183.200-50",
        name: "Bruno Lima"
      },
      {
        recordType: "prospect",
        birthday: "1988-12-03",
        education: "Pós-graduação",
        father: "Roberto Oliveira",
        gender: "Feminino",
        maritalStatus: "Divorciada",
        mother: "Ana Oliveira Costa",
        age: 35,
        contactAddresses: [
          {
            createdDate: "2023-08-15T13:40:00Z",
            street: "Av. Borges de Medeiros, 789, Cobertura",
            city: "Porto Alegre",
            state: "Rio Grande do Sul",
            zipCode: "90020-025",
            country: "Brasil",
            origin: "lead",
            type: "residential"
          }
        ],
        contactPhones: [
          {
            createdDate: "2023-08-15T13:40:00Z",
            number: "51987654321",
            type: "mobile",
            origin: "lead"
          }
        ],
        contactEmails: [
          {
            createdDate: "2023-08-15T13:40:00Z",
            email: "carla.oliveira@email.com",
            origin: "lead"
          }
        ],
        document: "156.184.220-69",
        name: "Carla Oliveira"
      }
    ];
  
    // Endpoint principal para dados OAuth2 com schema DSAR
    app.get('/api/oauth2/data', (req, res) => {
      const authHeader = req.headers['authorization'];
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
          error: 'invalid_token',
          error_description: 'Authorization header missing or invalid format'
        });
      }
  
      const token = authHeader.split(' ')[1];
  
      if (token === 'simulated-oauth2-token') {
        res.json({
          success: true,
          data: userData,
          count: userData.length,
          timestamp: new Date().toISOString()
        });
      } else {
        res.status(403).json({ 
          error: 'access_denied',
          error_description: 'Invalid access token'
        });
      }
    });
  
    // Endpoint para buscar dados de uma pessoa específica por CPF (para DSAR)
    app.get('/api/oauth2/dsar/:document', (req, res) => {
      const authHeader = req.headers['authorization'];
      const { document } = req.params;
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
          error: 'invalid_token',
          error_description: 'Authorization header missing or invalid format'
        });
      }
  
      const token = authHeader.split(' ')[1];
  
      if (token !== 'simulated-oauth2-token') {
        return res.status(403).json({ 
          error: 'access_denied',
          error_description: 'Invalid access token'
        });
      }
  
      // Buscar pessoa pelo documento
      const person = userData.find(user => user.document === document);
  
      if (person) {
        res.json({
          success: true,
          data: person,
          timestamp: new Date().toISOString()
        });
      } else {
        res.status(404).json({
          error: 'not_found',
          error_description: 'No data found for the provided document',
          document: document
        });
      }
    });
  
    // Endpoint de validação de token
    app.get('/oauth2/validate', (req, res) => {
      const authHeader = req.headers['authorization'];
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
          valid: false,
          error: 'invalid_token_format'
        });
      }
  
      const token = authHeader.split(' ')[1];
  
      if (token === 'simulated-oauth2-token') {
        res.json({
          valid: true,
          client_id: 'meu-client-id',
          expires_in: 3600,
          scope: 'read'
        });
      } else {
        res.status(401).json({
          valid: false,
          error: 'invalid_token'
        });
      }
    });
  };
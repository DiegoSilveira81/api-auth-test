const express = require('express');
const bodyParser = require('body-parser');
const basicAuthRoutes = require('./APIs/BasicAuth/routes/basicAuthRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/basic-auth', basicAuthRoutes);

app.listen(6666, () => {
    console.log('Servidor rodando na porta 6666 em http://localhost:6666');
});

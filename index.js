const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('./APIs/basic-auth')(app);
require('./APIs/bearer-auth')(app);
require('./APIs/oauth2-auth')(app);

app.listen(6666, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 6666 em todas as interfaces');
});
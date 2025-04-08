const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('./APIs/basic-auth')(app);
require('./APIs/bearer-auth')(app);
require('./APIs/oauth2-auth')(app);

app.listen(6666, () => {
    console.log('API rodando em http://localhost:6666');
});
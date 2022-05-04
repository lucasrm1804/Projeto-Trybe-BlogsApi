require('dotenv/config');
require('./models/index');
const express = require('express/');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

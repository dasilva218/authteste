import express from 'express';
import { createServer } from 'node:http';
import { router } from './router/index.js';

const app = express();
const server = createServer(app);

app.use('', router);

server.listen(8080, () => {
  console.log(`serveur lancé`);
});

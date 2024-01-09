import express from 'express';
import { createServer } from 'node:http';
import { router } from './router/index.js';
import { dirname } from 'node:path';

const app = express();
const server = createServer(app);

// Setup static files serving
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('', router);

server.listen(8080, () => {
  console.log(`serveur lancé`);
});

import express from 'express';
import { createServer } from 'node:http';
import { router } from './router/index.js';
import { teste } from './router/teste.js';

const app = express();
const server = createServer(app);

// Setup static files serving
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('', router);
app.use('', teste)

server.listen(8080, () => {
  console.log(`serveur lancé`);
});

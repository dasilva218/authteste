import express from 'express';
import { createServer } from 'node:http';
import { router } from './router/index.js';
//import{User} from './controller/user.js'



const app = express();
const server = createServer(app);


// Setup static files serving
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('', router);
//app.post('/signin',User.signin);


server.listen(8080, () => {
  console.log(`serveur lancé`);
});

const express = require('express');
const ModelUser = require('./models/user');
const routerApi = require('./routes');
import { Model } from 'mongoose';
import dbConnect from './config';
const app = express();

// Using async/await
const initDatabase = async () => {
  await dbConnect();
  // rest of your app initialization
};

// Or using promises
dbConnect()
  .then(() => {
    // rest of your app initialization
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
  });


  const router = express.Router();
  router.post('/', async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
  });
  router.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
  });
routerApi(app);

app.use(express.json());
app.use(router);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
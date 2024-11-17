const express = require('express');
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
  router.post('/', (req, res) => {
    const body = req.body;
    res.send(body);
  });
  router.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use(express.json());
app.use(router);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
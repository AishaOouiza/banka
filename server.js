// server.js
import express from 'express';
import User from './api/models/User';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Banka server now running!'});
});
app.post('/api/v1/user', User.create);
app.get('/api/v1/user', User.getAll);
app.get('/api/v1/user/:id', User.getOne);
app.put('/api/v1/user/:id', User.update);
app.delete('/api/v1/user/:id', User.delete);

app.listen(3000);
console.log('app running on port ', 3000);

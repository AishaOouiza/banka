// server.js
import express from 'express';
import bodyParser from 'body-parser';
import User from './api/controllers/User';
import Account from './api/controllers/Account';
import Transaction from './api/controllers/Transaction';

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Banka server now running!'});
});

app.get('/api/v1/user', (req, res) => {
  return res.status(200).send({ message: 'User API!' });
});

app.post('/api/v1/user/signup', (req, res) => {
  return res.status(200).send(User.signUp(req.body));
});

app.get('/api/v1/user/findAll', (req, res) => {
  return res.status(200).send(User.findAll());
});

app.get('/api/v1/user/:id', (req, res) => {
  return res.status(200).send(User.getOne(req.params.id));
});

app.put('/api/v1/user/:id', (req, res) => {
  return res.status(200).send(User.update(req.params.id));
});

app.delete('/api/v1/user/:id', (req, res) => {
  return res.status(200).send(User.delete(req.params.id));
});

app.get('/api/v1/account', (req, res) => {
  return res.status(200).send({ message: 'Account API!' });
});

app.post('/api/v1/account/create', (req, res) => {
  return res.status(200).send(Account.create(req.body));
});

app.get('/api/v1/account/findAll', (req, res) => {
  return res.status(200).send(Account.findAll());
});

app.get('/api/v1/account/:id', (req, res) => {
  return res.status(200).send(Account.getOne(req.params.id));
});

app.put('/api/v1/account/:id', (req, res) => {
  return res.status(200).send(Account.update(req.params.id));
});

app.delete('/api/v1/account/:id', (req, res) => {
  return res.status(200).send(Account.delete(req.params.id));
});

app.get('/api/v1/transaction', (req, res) => {
  return res.status(200).send({ message: 'Transaction API!' });
});

app.post('/api/v1/transaction/create', (req, res) => {
  return res.status(200).send(Transaction.create(req.body));
});

app.get('/api/v1/transaction/findAll', (req, res) => {
  return res.status(200).send(Transaction.findAll());
});

app.get('/api/v1/transaction/:id', (req, res) => {
  return res.status(200).send(Transaction.getOne(req.params.id));
});

app.put('/api/v1/transaction/:id', (req, res) => {
  return res.status(200).send(Transaction.update(req.params.id));
});

app.delete('/api/v1/transaction/:id', (req, res) => {
  return res.status(200).send(Transaction.delete(req.params.id));
});


app.listen(3000);
console.log('app running on port ', 3000);

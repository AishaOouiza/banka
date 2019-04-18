'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // server.js


app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'Banka server now running!' });
});
app.post('/api/v1/user', User.create);
app.get('/api/v1/user', User.getAll);
app.get('/api/v1/user/:id', User.getOne);
app.put('/api/v1/user/:id', User.update);
app.delete('/api/v1/user/:id', User.delete);
app.post('/api/v1/account', Account.create);
app.get('/api/v1/account', Account.getAll);
app.get('/api/v1/account/:id', Account.getOne);
app.put('/api/v1/account/:id', Account.update);
app.delete('/api/v1/account/:id', Account.delete);

app.listen(3000);
console.log('app running on port ', 3000);
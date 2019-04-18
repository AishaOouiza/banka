"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _User = _interopRequireDefault(require("./api/controllers/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json()); // support json encoded bodies

app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // support encoded bodies

app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.status(200).send({
    message: 'Banka server now running!'
  });
});
app.get('/api/v1/user', function (req, res) {
  return res.status(200).send({
    message: 'User API!'
  });
});
app.post('/api/v1/user/signup', function (req, res) {
  return res.status(200).send(_User["default"].signUp(req.body));
});
app.get('/api/v1/user/findAll', function (req, res) {
  return res.status(200).send(_User["default"].findAll());
});
app.get('/api/v1/user/:id', function (req, res) {
  return res.status(200).send(_User["default"].getOne(req.params.id));
});
app.put('/api/v1/user/:id', function (req, res) {
  return res.status(200).send(_User["default"].update(req.params.id));
});
app["delete"]('/api/v1/user/:id', function (req, res) {
  return res.status(200).send(_User["default"]["delete"](req.params.id));
});
app.listen(3000);
console.log('app running on port ', 3000);
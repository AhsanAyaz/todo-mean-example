


'use strict';

var express = require('express');
var controller = require('./todos.controller');

var router = express.Router();

router.get('/', controller.index);                  // localhost:3000/api/todos/
router.get('/hello', controller.hello);             // localhost:3000/api/todos/hello
router.post('/', controller.create);                // localhost:3000/api/todos/

exports = module.exports = router;
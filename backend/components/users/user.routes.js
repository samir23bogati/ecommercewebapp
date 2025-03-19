const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.route('/route')
.get()
.post()

router.route('/:id')
.get(userController.getUser)
.put()
.delete();

module.exports =router;
const express = require('express');
const router =express.Router();

router.use('/auth',require('./../components/auth/auth.routes'));
router.use('/user',require('./../components/users/user.routes'));

module.exports = router;
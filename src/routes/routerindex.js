const router = require('express').Router();
const user = require('./routeruser');

router.use(user);
module.exports = router; 

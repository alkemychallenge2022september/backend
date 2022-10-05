const router = require('express').Router();
const user = require('./routeruser');
const salary = require('./routersalary');
router.use(user);
router.use(salary);

module.exports = router; 

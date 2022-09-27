const {userreg, userlog} = require('../controllers/constrolleruser');

const router = require('express').Router();

router.post('/reg', userreg);
router.post('/log', userlog);

module.exports = router;
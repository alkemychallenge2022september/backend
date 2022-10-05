const router = require('express').Router();
const {getinput, postinput, getoutput, postoutput, salary, suminput, sumoutput} = require('../controllers/controllersalary');

router.get('/salary', salary);

router.get('/input', getinput);

router.post('/input', postinput);

router.get('/output', getoutput);

router.post('/output', postoutput);

router.get('/input-total', suminput);

router.get('/output-total', sumoutput);

module.exports = router;









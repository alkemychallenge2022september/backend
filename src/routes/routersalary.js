const router = require('express').Router();
const {auth} = require('../middleware/auth')
const {getinput, postinput, getoutput, postoutput, salary, suminput, sumoutput} = require('../controllers/controllersalary');

router.get('/salary', auth, salary);

router.get('/input', auth, getinput);

router.post('/input', auth, postinput);

router.get('/output', auth, getoutput);

router.post('/output', auth, postoutput);

router.get('/input-total', auth, suminput);

router.get('/output-total', auth,  sumoutput);

module.exports = router;









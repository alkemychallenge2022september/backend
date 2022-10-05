const router = require('express').Router();
const {getinput, postinput, getoutput, postoutput} = require('../controllers/controllersalary');

router.get('/salary', (req, res)=>{

});

router.get('/input', getinput);


router.post('/input', postinput);

router.get('/output', getoutput);


router.post('/output', postoutput);

router.get('/input-total', (req, res)=>{
    
});

router.get('/output-total', (req, res)=>{
    
});

module.exports = router;









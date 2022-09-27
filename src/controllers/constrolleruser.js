const { userLog, userReg } = require('../bd/models/modeluser');


const userreg = async (req, res) => {

    const{name, email, password} = req.body;
    if(email != '' && password != '', name != '') userReg(req, res)
    
}

const userlog = (req, res) => {

    const { password, email } = req.body;
    (password === '' && email === '') ? res.status(405).end() : userLog(req, res);

}

module.exports.userlog = userlog;
module.exports.userreg = userreg;
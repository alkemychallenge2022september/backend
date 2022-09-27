const { userLog, userReg } = require('../bd/models/modeluser');

const userreg = (req, res) => {

    const { name, password, email } = req.body;

    (name === '' && password === '' && email === '') ? res.status(405).end() : userReg(req, res);

}

const userlog = (req, res) => {

    const { password, email } = req.body;
    (password === '' && email === '') ? res.status(405).end() : userLog(req, res);

}

module.exports.userlog = userlog;
module, exports.userreg = userreg;
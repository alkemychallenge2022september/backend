const { user } = require("./user");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const auth = async (req, res, next) => {

	try {
		console.log(user.gettoken())
		if (user.getname() == null || user.getname() == undefined) {

			return res.status(401).send('Unauhtorized Request');

		}
		if (!req.headers['authorization']) {

			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {

			return res.status(401).send('Unauhtorized Request');
		}


		const payload = await jwt.verify(token, process.env.TOKEN_SECRET);
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		next();
	} catch (e) {
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports.auth = auth;
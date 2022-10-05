const {user} = require('../../middleware/user');
const dbconnection = require('../connections/bd');

const modelSumOuput = (req, res) =>{
    
    let queryString = `SELECT (SELECT SUM(mount) AS sumoutput FROM output WHERE output.userid = ${user.getuserid()}) AS sumoutput;`
    
    dbconnection.query(queryString, (err, rows, fails)=>{

        if (err) {
            console.log('Failed to query [input], err: ', err)
            res.status(404).end()
            return
          }
          res.status(200).json(rows)
    })
}

const modelSumInput = (req, res) =>{

    let queryString = `SELECT (SELECT SUM(mount) AS suminput FROM input WHERE input.userid = ${user.getuserid()}) AS suminput`
    dbconnection.query(queryString, (err, rows, fails)=>{
        if (err) {
            console.log('Failed to query [input], err: ', err)
            res.status(404).end()
            return
          }
          res.status(200).json(rows)
    })
}

const modelSalary = (req, res) => {

    let queryString = `SELECT (SELECT SUM(mount) AS suminput FROM input WHERE input.userid = ${user.getuserid()}) - (SELECT SUM(mount) AS sumoutput FROM output WHERE output.userid = ${user.getuserid()}) AS total`
    dbconnection.query(queryString, (err, rows, fails)=>{
        if (err) {
            console.log('Failed to query [input], err: ', err)
            res.status(404).end()
            return
          }
          res.status(200).json(rows)
    })

}

 module.exports.modelSalary = modelSalary;
 module.exports.modelSumInput = modelSumInput;
 module.exports.modelSumOuput = modelSumOuput;

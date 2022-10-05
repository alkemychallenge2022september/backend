const {user} = require('../../middleware/user');
const dbconnection = require('../connections/bd')

//input 

const modelginput = async (req, res) =>{

     
    let queryString = `SELECT inputcategory.name, mount, description, dateInput FROM  inputcategory, input, user WHERE user.userid = ${user.getuserid()} AND input.userid = ${user.getuserid()} AND inputcategory.icategoryid = input.icategory`
 
    dbconnection.query(queryString, async(err, rows, fails)=>{

        if (err) {
            console.log('Failed to query [input], err: ', err)
            res.status(404).end()
            return
          }
          res.status(200).json(rows)
    })
    console.log(user.getuserid(), ' ', user.getname()); 

}

const modelpinput = async (req, res) =>{

    const {amount, date, description, idcategory} = req.body;
    let queryString = `INSERT INTO input (mount, description, userid, icategory, dateInput) VALUES (${amount}, '${description}', ${user.getuserid()}, ${idcategory}, '${date}')`
    dbconnection.query(queryString, async(err, rows, fails) =>{
        if (err) throw err;
    res.send('successful register');
    })
    
}




// output

const modelgoutput = async (req, res) =>{
 
    let queryString = `SELECT outputcategory.name, mount, description, dateOutput FROM  outputcategory, output, user WHERE user.userid = ${user.getuserid()} AND output.userid = ${user.getuserid()} AND outputcategory.ocategoryid = output.ocategory`
 
    dbconnection.query(queryString, async(err, rows, fails)=>{

        if (err) {
            console.log('Failed to query [input], err: ', err)
            res.status(404).end()
            return
          }
          res.status(200).json(rows)
    })
    console.log(user.getuserid(), ' ', user.getname()); 

}

const modelpoutput = async (req, res)=>{
    
    const {amount, date, description, idcategory} = req.body;
    let queryString = `INSERT INTO output (mount, description, userid, ocategory, dateOutput) VALUES (${amount}, '${description}', ${user.getuserid()}, ${idcategory}, '${date}')`
    dbconnection.query(queryString, async(err, rows, fails) =>{
        if (err) throw err;
    res.send('successful register');
    })
}




module.exports.modelginput = modelginput;
module.exports.modelpinput = modelpinput;
module.exports.modelgoutput = modelgoutput;
module.exports.modelpoutput = modelpoutput;

// add data to input 
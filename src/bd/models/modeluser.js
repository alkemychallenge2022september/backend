const con = require('../connections/bd');

const userLog = async (req, res) => {
   
  const { email, password } = req.body
  let queryString = `SELECT email, password, name, userid FROM user WHERE email = ? AND password = ?`

  dbconnection.query(queryString, [email, password], (_err, results, field) => {
    if (_err) {
      console.log('Failed to query [userLog], err: ', _err)
      res.status(404).end()
      return
    }
    if (results.length == 0) 
    {
      res.status(404).send('without user') 
    }else{
      res.status(200).json({ 'name': results[0].name })
    } 
  })
}
const userReg = async (req, res) => {
    
    const {name, password, email} = req.body;
    let queryString = `SELECT email FROM user WHERE email = ?`
     con.query(queryString, email, async (err, rows, fields ) => {

        if(err) throw err;
        let dataQuery = await rows.filter(elements => elements.email === email);
        if(dataQuery.length == 0) {
            
            con.query(`INSERT INTO user(name, password, email) VALUES ('${name}', '${password}', '${email}')`, err =>{

                if(err) throw err; 
                res.send('successful register'); 
                
            }); 
        }else {
            res.status(405).json('was error with register');
        }
     });

     
}
module.exports.userLog = userLog;
module.exports.userReg = userReg;

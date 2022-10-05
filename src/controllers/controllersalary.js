const {modelginput, modelpinput, modelgoutput, modelpoutput} = require('../bd/models/modelsalary');

const getinput = async (req, res)=>{

    await modelginput(req, res);
    
}
const postinput = async (req, res) =>{
    
    await modelpinput(req, res);
} 


const getoutput = async (req, res) =>{
    
    await modelgoutput(req, res);
    
}

const postoutput = async(req, res) =>{
    
    await modelpoutput(req, res) 
}

module.exports.getinput = getinput;
module.exports.postinput = postinput;
module.exports.getoutput = getoutput;
module.exports.postoutput = postoutput;
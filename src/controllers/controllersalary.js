const {modelginput, modelpinput, modelgoutput, modelpoutput} = require('../bd/models/modelsalary');
const {modelSalary, modelSumInput, modelSumOuput} = require('../bd/models/modeloperations');

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

// operations

const salary = async(req, res) => {
    
  await modelSalary(req, res)
}

const suminput = async(req, res) =>{

    await modelSumInput(req, res)
}

const sumoutput = async(req, res) => {

    await modelSumOuput(req, res);
}

module.exports.getinput = getinput;
module.exports.postinput = postinput;
module.exports.getoutput = getoutput;
module.exports.postoutput = postoutput;
module.exports.salary = salary;
module.exports.suminput = suminput;
module.exports.sumoutput = sumoutput;
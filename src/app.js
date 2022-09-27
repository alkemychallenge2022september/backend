require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../src/routes/routerindex');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/v1', routes);
app.use(morgan('dev'));
app.use(cors());


const port = process.env.PORT || 3001;

app.listen(port, ()=>{

console.log('listen on port: ', port);
}); 
require('./bd/connections/bd')
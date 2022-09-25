require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, ()=>{

console.log('listen on port: ', port);
}); 
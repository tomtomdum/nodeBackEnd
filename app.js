const express = require('express');
const app = express();
const jsonObjct = {message: 'allo'};

const studentRoutes = require('./routes/student');
const client = require('./dbConnection');
client.connect();

app.use('/student', studentRoutes);



module.exports = app;

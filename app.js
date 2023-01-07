const express = require('express');
const app = express();
const jsonObjct = {message: 'allo'};

const studentRoutes = require('./routes/student');
const gradeRoutes = require('./routes/grade');
const client = require('./dbConnection');
client.connect();

app.use('/student', studentRoutes);
app.use('/grade', gradeRoutes);



module.exports = app;

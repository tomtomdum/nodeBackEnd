const express = require('express');
const app = express();
const jsonObjct = {message: 'allo'};

const studentRoutes = require('./routes/student')
app.use('/student', studentRoutes);

module.exports = app;
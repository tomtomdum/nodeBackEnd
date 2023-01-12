const Student = require('./classes/student.js');
const express = require('express');
// const round = require('./classes/calculator.js');
const {round, roundArrow2} = require('./classes/calculator.js');
const app = express();
const jsonObjct = {message: 'allo'};

const studentRoutes = require('./routes/student');
const gradeRoutes = require('./routes/grade');
const client = require('./dbConnection');
client.connect();

app.use('/student', studentRoutes);
app.use('/grade', gradeRoutes);


// console.log(round.roundArrow2(2.3));
console.log(roundArrow2(2.3))

// console.log(round(2.3));
// console.log(round2(2.3));



// const student = new Student('mark','denino','130 str');
const student = new Student('a','b','c');

console.log(student.fName);

student.fName= "pol";

console.log(student.fName);

module.exports = app;

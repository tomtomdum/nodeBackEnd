

const express = require('express');
const router = express.Router();
const client = require('../dbConnection');

router.get('/getAll', (req, res, next) => {
        console.log('allo');
        client.query('select grades.grade, student.fname, course.name from grades inner join student on student_id = student.id inner join course on course_id = course.id', (err,result)=>{
            if(!err){
                res.status(200).json(result.rows);
            }
        })
    });

    router.get('/:gradeId', (req, res, next) => {
        const id = req.params.gradeId
        
        client.query('select grades.grade, student.fname, course.name from grades inner join student on student_id ='+ id +'inner join course on course_id = course.id', (err,result)=>{
            if(!err){
                console.log(result.rows[0]);
                res.send(result.rows);
            }
        })
    });
    router.post('/addGrade', (req, res, next) => {
        client.query('insert into grades values (default,2,1,45)', (err,result)=>{
            if(!err){
                res.status(200);
            }
        })
    });

router.get('/', (req, res, next) => {
    res.status(200).json({
        name: 'mick'
    });
});







module.exports = router;
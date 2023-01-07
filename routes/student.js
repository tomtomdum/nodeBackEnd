const express = require('express');
const router = express.Router();
const client = require('../dbConnection');

router.get('/getAll', (req, res, next) => {
        console.log('allo');
        client.query('select * from student', (err,result)=>{
            if(!err){

                res.send(result.rows);
            }
        })
    });

    router.get('/:studentId', (req, res, next) => {
        const id = req.params.studentId
        
        client.query('select * from student where id ='+id, (err,result)=>{
            if(!err){
                console.log(result.rows[0].lname);
                res.send(result.rows);
            }
        })
    });

router.get('/', (req, res, next) => {
    res.status(200).json({
        name: 'mick'
    });
});







module.exports = router;
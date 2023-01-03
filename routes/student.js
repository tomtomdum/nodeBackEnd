const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        name: 'mick'
    });
});

router.get('/:studennntId', (req, res, next) => {
    const id = req.params.studennntId
    res.status(200).json({
        name: id
    });
});
module.exports = router;
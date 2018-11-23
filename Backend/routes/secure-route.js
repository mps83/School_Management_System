const express = require('express');
const router = express.Router();

router.get('/secure',(req,res) => {
    res.json({
        message : 'You Accessed secure Api'
    });
})
module.exports = router;
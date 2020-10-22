const express = require('express');
const router = express.Router(); // new Router();

router.get('/login',(req,res,next)=>{
res.render('./member/login.pug');
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.redirect('/barrage');
});

router.post('/comment', (req, res, next) => {
    console.log(req.body);
    let io = req.app.locals.io;
    io.emit('NEW_COMMENT', req.body.comment);
    // res.statusCode = 200
    res.end();
})

module.exports = router;

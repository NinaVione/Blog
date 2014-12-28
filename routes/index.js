var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET Blog page. */
router.get('/blog', function(req, res) {
    res.render('blog', { title: 'Blog' })
});

/* GET database page. */
router.get('/dblist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('dblist', {
            "dblist" : docs
        });
    });
});
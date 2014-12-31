var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET Blog page. */
router.get('/blog', function(req, res) {
    //res.render('blog', { title: 'Blog' })

    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('blog', {
            "blog" : docs
        });
    });
});

/* GET database page. */
router.get('/bloglist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('bloglist', {
            "bloglist" : docs
        });
    });
});

/*router.post('/server', function(req, res) {
  console.log( 'req received' ); 
  var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
  //res.send(data);
})*/
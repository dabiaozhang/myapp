var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',function(err,html){
	res.send(html);
  });
});

router.get('/config.js', function (req, res) {
  res.send('config.js');
});


/*router.get('/', function(req, res, next) {
    res.render('index');
});*/

module.exports = router;

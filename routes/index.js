/*jshint esversion: 6 */
import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index',function(err,html){
	res.send(html);
  });
});

router.get('/file/:name',(req, res, next) => {

  console.log(req);

  let options = {
    root: __dirname + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  let fileName = req.params.name;
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});


/*router.get('/', function(req, res, next) {
    res.render('index');
});*/

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Chunyan' });
});

router.get('/search', function(req, res, next) { 'use strict';
    console.log("server side search called.");
    res.send({
        result:'success foo' ,
        value:'search result is found',
        err:'erro is none'
    });
});

module.exports = router;

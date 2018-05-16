var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Chunyan' });
});

router.get('/search', function(req, res, next) { 'use strict';
    console.log("server side search called.");
    // noinspection JSAnnotator
    res.send({
         result:'success foo' ,
         value:'search result is found',
         err:'erro is none'
    });
});

router.get('/getFeetInMile', function(req, res, next) { 'use strict';
    console.log('server side getFeetInMile  called.');
    res.send({
        result:'5280 feet in one mile'
    });
});

/*handle get in server */

router.get('/calculateFeetFromMiles', function(request, response) {
    'use strict';
    console.log('server side calculateFeetFromMiles called', request.query);
    const result=parseInt(request.query.miles)*5280;

    response.send({
        result: result
    });
});

/*handle post in server*/
var calculateCircum  = require('./utils');

router.post('/calculateCircumference', function(request, response) {
    'use strict';
    console.log('calculateCircumference post called');
    console.log('request.body is: ',request.body);

    var radius = parseInt(request.body.radius);
    var result = calculateCircum.myCircum.calculateCircumference(radius);

    response.send({
        "status": result
    });
});

module.exports = router;

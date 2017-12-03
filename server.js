// server.js

// BASE SETUP
// =============================================================================
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/users_test'); // connect to our database
var Message     = require('./src/app/message');
var Notice     = require('./src/app/dmcaNotices');
var Dispute     = require('./src/app/dispute');
var Collection = require('./src/app/collection');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var counter = 0;
var validate = require("validate.js");
var http = require('http');
var fs = require('fs');
var fetch = require('fetch');
var path = require("path")
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();              // get an instance of the express Router
app.set('view engine','ejs');
// middleware to use for all requests
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.use(express.static(path.join(__dirname + '/static')));
router.get('/', function(req, res) {
    res.json({message: 'Welcome'});
});


//_____________ collection route _________________

router.route('/collection') 
    // create a message (accessed at POST http://localhost:8080/api/message)

    .post(function(req, res) {
    
        console.log(req.body);
        var collection = new Collection();      // create a new instance of the message model
        collection.name = req.body.name;  
        collection.owner = req.body.owner;  
        collection.descript = req.body.descript;  
        collection.visability = req.body.visability;  
        collection.imageUrls = req.body.imageUrls;  
        collection.rating = req.body.rating;  
        
        // save the message and check for errors
        collection.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Collection Posted' });
        });

    })
    
       .get(function(req, res) {
        Collection.find(function(err, collection) {
            if (err)
                res.send(err);

            res.json(collection);
        });
    });
    
//Routes for Disputes
router.route('/disputes') 
    // create a message (accessed at POST http://localhost:8080/api/message)
    .post(function(req, res) {
    
        console.log(req.body);
        var dispute = new Dispute();      // create a new instance of the message model
        dispute.timeStamp = Date.now();  // set the message timestamp (comes from the request)
        dispute.owner = req.body.owner;  
        dispute.dispute = req.body.dispute;
        
        // save the message and check for errors
        dispute.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Dispute Posted' });
        });

    })
    
    .get(function(req, res) {
        Dispute.find(function(err, dispute) {
            if (err)
                res.send(err);

            res.json(dispute);
        });
    });
// more routes for our API will happen here
//Routes for DCMA Notices
router.route('/dmcaNotice') 
    // create a message (accessed at POST http://localhost:8080/api/message)
    .post(function(req, res) {
    
        console.log(req.body);
        var notice = new Notice();      // create a new instance of the message model
        notice.timeStamp = Date.now();  // set the message timestamp (comes from the request)
        notice.owner = req.body.owner;  
        notice.defendant = req.body.defendant; 
        notice.collectionURL = req.body.collectionURL;
        notice.sentNotice = req.body.sentNotice;  
        notice.dispute = req.body.dispute;
        
        // save the message and check for errors
        notice.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Notice Posted' });
        });

    })
    
    .get(function(req, res) {
        Notice.find(function(err, notice) {
            if (err)
                res.send(err);

            res.json(notice);
        });
    });

//Routes for Disputes
router.route('/disputes') 
    // create a message (accessed at POST http://localhost:8080/api/message)
    .post(function(req, res) {
    
        console.log(req.body);
        var dispute = new Dispute();      // create a new instance of the message model
        dispute.timeStamp = Date.now();  // set the message timestamp (comes from the request)
        dispute.owner = req.body.owner;  
        dispute.dispute = req.body.dispute;
        
        // save the message and check for errors
        dispute.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Dispute Posted' });
        });

    })
    
    .get(function(req, res) {
        Dispute.find(function(err, dispute) {
            if (err)
                res.send(err);

            res.json(dispute);
        });
    });

// on routes that end in /message
// ----------------------------------------------------
router.route('/message')

    // create a message (accessed at POST http://localhost:8080/api/message)
    .post(function(req, res) {
    
        console.log(req.body);
        var message = new Message();      // create a new instance of the message model
        message.timeStamp = Date.now();  // set the message timestamp (comes from the request)
        message.pPolicy = req.body.pPolicy;  
        message.sPolicy = req.body.sPolicy; 
        message.dmcaPolicy = req.body.dmcaPolicy; 
        message.contact = req.body.contact;  
        
        // save the message and check for errors
        message.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Message Posted' });
        });

    })
        .delete(function(req, res) {
        Notice.remove({
            _id: req.params.notice_id
        }, function(err, notice) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    })
    
        .get(function(req, res) {
        Message.find(function(err, message) {
            if (err)
                res.send(err);

            res.json(message);
        });
    });

    

// on routes that end in /message/:messagecount
// ----------------------------------------------------
router.route('/message/:messagecount')

    // get the message with that count (accessed at GET http://localhost:8080/api/message/:messagecount)
    .get(function(req, res) {
        Message.findById(req.params.messagecount, function(err, message) {
            if (err)
                res.send(err);
            res.json(message);
        });
    })
    
        // delete the message with this count (accessed at DELETE http://localhost:8080/api/message/:messagecount)
    .delete(function(req, res) {
        Message.remove({
            count: req.params.messagecount
        }, function(err, message) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

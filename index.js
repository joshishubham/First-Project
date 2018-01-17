var express  = require('express');
var mongoose = require('mongoose');
var bp       = require('body-parser');
var cp       = require('cookie-parser');
var session  = require('express-session');
var flash    = require('connect-flash');
var Sign     = require('./database/mongo.js');
var app      = express();

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/sign-up', {

	    useMongoClient: true
});

app.use(flash())
app.use(express.static('views'));
app.set('view engine', './views');

app.use(bp.json());
app.use(bp.urlencoded({extended : true}));
app.use(cp());

app.use(session({

	secret: 'secure',
	resave: true,
	saveUninitialized: true

}));

app.get('/', function (req, res) {
	  
	  res.render('index.ejs', {message: req.flash('msg')});

});

app.post('/', function (req, res) {

	 var data = new Sign(req.body);
       req.flash('msg', "Data safe successfull in database !..");

      Sign.database(data, function (err, user){ 
          if (err) throw err;
              res.redirect('/flash')
    });
});

app.get('/flash', function (req, res) {

	  res.render('inde.ejs', {message: req.flash('msg')});
});

app.listen(8080, console.log("http://localhost:8080"));
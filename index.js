var express  = require('express');
var mongoose = require('mongoose');
var bp       = require('body-parser');
var cp       = require('cookie-parser');
var session  = require('express-session');
var flash    = require('connect-flash');
var Sign     = require('./database/mongo.js');
var bcrypt 	 = require('bcryptjs');
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
	  
	  res.render('index.ejs');

});

app.post('/', function (req, res) {

bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(req.body.Password, salt, function(err, hash) {

   
	 var data = new Sign({

	 	  Name     : req.body.Name,
	 	  Email    : req.body.Email,
	 	  Password : hash,
	 	  Confirm  : req.body.Confirm,
   		  Mobile   : req.body.Mobile,
		  Dates    : req.body.Dates,
		  Month    : req.body.Month,
		  Year     : req.body.Year,
		  Gender   : req.body.Gender

	 });
        
        data.save();
        req.flash('msg', "Data safe successfull in database !..");
       	res.redirect('/flash');
       	console.log(data)

    });	 
  });          
});

app.get('/flash', function (req, res) {

	  res.render('inde.ejs', {message: req.flash('msg')});
});

app.listen(8080, console.log("http://localhost:8080"));
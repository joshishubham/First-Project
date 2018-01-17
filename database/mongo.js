var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');

var sign = mongoose.Schema({

      Name:      String,
      Email:     String,
      Password:  String,
      Mobile:    Number,
      Dates:     Number,
      Month:     String,
      Year:      Number,
      Gender:    String

  });

var Sign = module.exports = mongoose.model("Sign", sign);

module.exports.database = function (data, callback) {
    var salt = bcrypt.genSalt(10, function (err, salt) {
      var hash =  bcrypt.hash(data.Password, salt, function(err, hash) {
                    data.Password = hash;
                      data.save(callback);
          });
      });
}
var mongoose = require('mongoose');


var earthquakeSchema = new mongoose.Schema({
    date : Date,
    time : String,
    loc: {
          type: [Number],  // [<longitude>, <latitude>]
          index: '2d'      // create the geospatial index
       },
    magnitude : String,
    location : String 
});


module.exports = mongoose.model('Earthquake', earthquakeSchema);

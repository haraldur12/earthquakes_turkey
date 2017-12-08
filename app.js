const express = require('express'),
      mongoose = require('mongoose'),
      app = express();


require('dotenv').config();

var Earthquakes = require('./models/earthquake');
var port = process.env.PORT || 8080;


mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/map', (req,res) => {
  Earthquakes.find({},(err,eq) => {
    if(err){
      console.log(err);
    }else {
      var earthquakes = [];
      eq.forEach(function(eq) {
      var object = { "lat" : eq.loc[0],
                    "lng" : eq.loc[1]
                    }
      earthquakes.push(object);
    });
      res.render('map',{locations:earthquakes,
                                      eq:eq});
    }
  });
});

app.get('/',(req, res ) => {
  res.render('index');
})

app.listen(port);

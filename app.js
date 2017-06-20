const express = require('express'),
      mongoose = require('mongoose'),
      app = express();


require('dotenv').config();

var Earthquakes = require('./models/earthquake');
var port = process.env.PORT || 8080;


mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/', (req,res) => {
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
      res.render('index',{locations:earthquakes,
                                      eq:eq});
    }
  });
});

app.get('/about',(req, res ) => {
  res.render('about');
})

app.listen(port);

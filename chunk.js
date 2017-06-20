const fs = require('fs');
const mongoose = require('mongoose');
const Earthquake = require('./models/earthquake');

mongoose.connect(process.env.DB_URL);


const readData = (input,callback) => {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}
let earthquake = {};

function func(data) {
  let newLine = data.split(/\s+/g);
  earthquake.date = newLine[0];
  earthquake.time = newLine[1];
  earthquake.latitude = newLine[2];
  earthquake.longitude = newLine[3];
  earthquake.magnitude = newLine[6];
  let location = [newLine[3],newLine[2]];
  var newEarthQuake = new Earthquake({
  date:newLine[0],
  time: newLine[1],
  loc: location,
  magnitude: newLine[6],
  location : `${newLine[8]} ${newLine[9]}`
  });
  newEarthQuake.save(function(err) {
  if (err) throw err;

  console.log('Earthquake added...!');
});
}

var input = fs.createReadStream('data.txt');
readData(input, func);

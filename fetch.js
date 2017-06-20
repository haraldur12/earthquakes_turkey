const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// i could not come up with a better solution to trim the beginning of the text.
// However since the script is intented to run on a specific page with no actual updates
// it should not raise any errors.


const getData = (url) => request(url, (err,res,body) => {
  // cheerio is like jquery on server side
  // so first with the request library we get the data and parse it using cheerio
  let earthquakes =  cheerio.load(body);

  let data = earthquakes('pre').text().substr(579);

  fs.writeFileSync('data.txt', data , (err) => {

    console.log(err);

  });

});

getData('http://www.koeri.boun.edu.tr/scripts/lst7.asp');

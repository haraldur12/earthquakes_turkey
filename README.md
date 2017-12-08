# Data
This humble webapp simply fetches the data from [koeri.boun.edu.tr](http://www.koeri.boun.edu.tr/scripts/lst9.asp) using the script that resides in **fetch.js**. For visualizing the data you have a few options. 

 1. You can either keep all the information in a text file and use it without making use of a database. In which case you wouldn't have to use **chunk.js**.

 2. Another option is to create a free [mlab](https://mlab.com/) account and push all the data to the database. If you opt for this option you don't have to change anything to get the script running except for running a few commands. 

# Installation 

 - First get this repository to your device or cloud.

> 	git clone git@github.com:haraldur12/earthquakes_turkey.git

 - When you got the files cd into the directory.

>  cd earthquakes_turkey

 - After that you run

> npm install

 - Create the environment file and set your mlab url.
 

>  touch .env

 - Your **DB_URL** should look like this

>DB_URL=mongodb://username:password@ds131492.mlab.com:31492/db_name

 - Run the code

> node app.js

# Production

You can see the code running [@depremharitasi](https://depremharitasi.herokuapp.com/). That's all!

![Deprem Haritasi Ekran Goruntusu](/screen_shot.png?raw=true "Earthquake Map of Turkey")

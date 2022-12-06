const express = require('express');
const app = express();

// 1) To enable our environment variables, we need to import dotenv and run the config() method BEFORE
// any other file or code that needs environment variables requires them.


// 2) We import our connectToDB function from our dbConnection.js file. For that, lets first create the 
// conection, so go to the folder DB and into the dbConnection.js to create this. Makes sure also to create
// a .env file where we are going to store our enviromenta variables to connect to the database.


// 3) And now that we have created the connection and imported it in here, we are going to immediately run the 
// function, to have our database connection up as soon as the process/server starts. While connectToDB is 
// an async function, the time for it to conclude is quick enough to not have to wait for it to establish.


// 4) Now lets create a variable were we are going to create the info for the port we are gonna be using. 
// Although for this project we are going to be using only our localhost, it is recomended to make this a 
// variable that can use different ports depending on if you are using a local host or another type of server,
// so that we don´t have later on problems with our deployment. For that, lets create first an envioromental 
// variable called PORT into our .env (leave it empty). Now lets create the port variable in wishlist and 
// using the process.env assing it the value of PORT. That way, when we deploy, we can input here the info 
// for the server. We are going to also assing this port variable the localhost 4000 value.


// 5) Since mongoose does not provide a sanitization tool out of the box, we can make use of the 
// express-mongo-sanitize package to sanitize our data, by removing any dollar signs ($) from the request body, 
// query or params.
// Documentation for it: https://www.npmjs.com/package/express-mongo-sanitize
// It serves as a middleware, so we can apply it to our whole app!
// 5.1) Require it first:


// 5.2) Then apply it to our app (you can also pass arguments to tailor your sanitization further)


// 6) We are gonna add another middleware, express.json, that is gonna help us with transforming the info of our 
// routes to json, se because of that it has to be put right before we import our routes from the route component.


// 7) We have our app respond only to the '/countries' route. In the countries, we will perform all CRUD operations, 
// connect to our MongoDB database and with the help of our ODM Mongoose, create schemas and perform queries.

// 8) Finally, remember to listen to the port.


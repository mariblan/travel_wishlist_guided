// We are going to be using Mongodb as a database, so to create the conection we are going to use Mongoose, we need to use the .connect() method for it.
// 1) For that we import mongoose


// 2) Then we can wrap our .connect() method in a function and export it, so we can run it in our wishlist.js file (the entrypoint of our server).
// We can also pass a callback that will run once the connection is established. Also, take into account the info may take a bit to get, so lets make this
// an async function


// 3) Remember to export the function so we can import in wishlist.js

// Mongoose, being an ODM, means we can structure our documents with the use of a Schema!
// This is a great way to ensure that our documents are structured in a consistent way, so that our
// queries are predictable and our data is clean and efficient.

// 1) For that we need to require mongoose, but we can go ahead and destructure it to only get what we need
//  for making a Schema, the 'Schema' class, and the model method.


// 2) We then proceed to create a Schema, and pass it an object with the fields we want to have in our
// documents. We can also specify the type of each field, and even add some validation to it.

// 3) Finally, we export the model, pass the name (singular) of the collection we want to use (you will see that in Mongo the
// collection will be pluralized), and the Schema we just created.

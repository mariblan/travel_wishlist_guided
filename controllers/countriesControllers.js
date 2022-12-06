// Since we will have no html/front end to test our API, we will rely on Postman or Insomnia to
// test our CRUD operations and see if our backend is responding as expected.

// 1.1) Firstly we need to create a model for our database, co go to the folder models and into countriesModel.js 
// and create a schema following the steps in that file and export it, and then come back here.
// 1.2) Now we need to import our Countries collection from our models



// 2) Now we can start building our database queries, and as they can take a little to complete, we will use 
// async/await to handle them. With async/await, we use try/catch to handle errors

// 2.1) Make a query that gets all the items of the collection countries from our mongodb database.
  const getCountries = async (req, res) => {   
    // 2.1.1) Create try/catch.

    // 2.1.2.) Inside the try we are going to use the .find() method to locate the items of our collection countries.

    // 2.1.3) Afterwards we are going to return the countries that we have found.

    // 2.1.4) Lastly, in the catch we send an error.message with the code 500 to the client
    
  }
  
  // 2.2) Make a query that gets an items of the collection countries using the id.
  const getCountriesByCode = async (req, res) => {
    // 2.2.1) Create try/catch
    
    // 2.2.2) Lets use the .find() method, so first we ned to find out the params info and once we have it
    // lets pass it in the method as an argument to find the item.

    // 2.2.3) Now, if we find a country with said id, we want to return it.

    // 2.2.4) And if the country doesn´t exist we want to send an error 404 to the client saying that.

    // 2.2.5) In the catch we are going to send an error.message with code 500.
  }
  
  // 2.3) Make a query that creates an items to the collection countries from our mongodb database.

  const postCountry = (req, res) => {
    // 2.3.1) We create the try/catch.

    // 2.3.2) Let´s  destructuralize the body of the object we are going to send.
    
    // 2.3.3) We can do some validation whether our body is sending the expected data here. If not, we can send a 
    // 400 status code and a message to the client. 

    // 2.3.4) Let´s check first if the item already exists using the method findOne(). If it does exist send an error
    // to the client with code 404.

    // 2.3.5) If it does´t exist, then let´s create it and send it to the client.

    // 2.2.6) In the catch we are going to send an error.message with code 500.
  }

  // 2.4) Make a query that updates an items of our collection.
  const updateCountry = (req, res) => {
    // 2.4.1) First, request the params we are going to use to find the item we want to update.

    // 2.4.2) Since this PUT request is meant to update any of the country's fields, we need to check first if the country
    // exists. Use the params in the step before for that to build a function that aids us in this.

    // 2.4.3) // If the Author does not exist, we return a 404 status code.

    // 2.4.4) If the Author exists, we can now update the Author's fields. The findOneAndUpdate method takes a few parameters, 
    // at the bare minimum: The param we are using of the document to update, and the fields to update. However, if you need 
    // the updated document to be returned, you need to add the {new: true} parameter as a third argument so your query returns 
    // you the updated document.

    // 2.4.5) Once updated send the new object to the client
    
    // 2.4.6) In the catch we are going to send an error.message with code 500.
    }
    
    // 2.5) Finally, lets create a method that deletes an item from our colecction. 
  const deleteCountry = (req, res) => {
    // 2.5.1) First, request the params we are going to use to find the item we want to update.

    // 2.5.2) Similarly as for the PUT request, we need to check if the author exists first

    // 2.5.3) If it doesn´t send a message to the client with code 400.

    // 2.5.4) If it exist use the method findOneAndDelete if you want to completely delete the item

    // or use the findOneAndUpdate to create a flag indicating that country is visited (visited: true)

    // 2.5.5) In the catch we are going to send an error.message with code 500.
  }
  
  // 3) Finally, don´t forget to export this functions, because we need to import them in the routes component.
  
  
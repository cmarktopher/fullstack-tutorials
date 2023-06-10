---
title: "MongoDB Setup"
number: 4
date: "2023-06-05"
---

***

# Setup MongoDB Compass

## Install MongoDB Compass

Download and install MongoDB Compass from: 

[MongoDB Compass](https://www.mongodb.com/products/compass)

This is a graphical user interface that will make it easier to create databases and view our collections as we create them and manipulate documents.

## Using MongoDB Compass

Follow the steps below to create a new database: 

1. Create a new connection and connect into it.

2. Click the plus icon where the "Databases" heading is on the left panel. 

3. Enter the name of the database and a collection. 

    For this, I have named the database "blog-db" and the collection "blogs" (feel free to change it if you like).
    
***

# Setup Mongoose


## Install Mongoose:

Type in the following command in your console:

```
npm install mongoose --save
```

## Setting up a connection string:

Before we can connect to our database, we will need a connection string. Let's place this string in a json file and import it to our app.

1. Inside the src folder, create a new folder and call it config.

2. Create a databaseConnection.json file.

3. Inside the json file, enter:

    ```
    {
        "mongo":
        {
            "connectionString": "mongodb://127.0.0.1:27017/blog-db"
        }
    }
    ```

    The url assigned to connectionString esentially contains our localhost (127.0.0.1), port number (27017) and database name (blog-db). Feel free to change these if you have something different. 

 
## Connecting app to the database

1. Import the required files by entering the following code somewhere at the top of your App.js file: 

    ```
    const databaseConnection = require("./src/config/databaseConnection.json");
    const mongoose = require('mongoose');
    ```

2. Now, we have everything we need to connect to our database using mongoose:

    ```
    mongoose.connect(databaseConnection.mongo.connectionString)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));
    ```

***

# Using Mongoose

## Creating a Schema

Firstly, it is important to note that MongoDB is schemaless and does not require a schema to define its structure. This means that each document within a given collection can have different data. However, by using Mongoose, we can introduce a structure through the use of a schema and also, have mongoose create a data model class for us based on the given schema. By doing this, we will have a data model object that we can use to interact with our database.

1. Inside the src folder, create a folder called "models" and create a file called "blog.js".

2. Enter the following code: 

    ```
    const mongoose = require("mongoose");
    const {Schema} = mongoose;

    const blogSchema = new Schema({
        name: {type: String},
    });

    const Blog = mongoose.model("Blog", blogSchema);

    module.exports = Blog;

    ```

    All we are doing here is firstly importing mongoose and getting the Schema object. We then define a blog schema where we have a name property, followed by the creation of a Blog model which uses said schema. 

## Creating an entry



## Updating our route to use the Blog model

1. Enter the following code in the following route in the blogRoutes.js file: 

    ```
    /** 
    * GET all blogs listing. 
    */
    router.get('/', async function(req, res, next) {

    try{
        
        allBlogs = await Blog.find();
        res.status(200).json(allBlogs);
    }
    catch (err){

        err.status = 500;
        return next(err);
    }

    });
    ```
2. Type npm start in the console and type in "http://localhost:3001/blogs" and you will see your newly added entry.

***
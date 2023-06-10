---
title: "Basic Blog Route"
number: 3
date: "2023-06-10"
---

***
# Index Route

In actuality, we have already implemented a route in the previous tutorial where we have an endpoint to the base URL which sends back a HTML resource file based on a template. Here, we have an index.js file which contains its own route handler for the base url: “/", which we have set in the app.js file. For reference, the code related to this is shown below:

app.js:
```
app.use('/', indexRouter);
```

index.js:
```
router.get('/', function(req, res, next) {
  res.render('index', {
    pageTitle: 'Blogs API',
    title: 'Welcome to Blogs API'})
});
```

***

# Blogs Route

To keep things simple, we will focus on a single route at the base URL of the blog route ('/blogs') to retrieve all blog data.

## Create a Blog Router and Route

1. Inside the routes folder, create a new file called blogRoutes.js.

2. Add in the following requires:

    ```
    const express = require('express');
    const router = express.Router();
    ```

3. Add in the route with its respective handling function:

    ```
    router.get('/', async function(req, res, next) {

    });
    ```

4. Let's add in some simple blog data above the route:

    ```
    var blogs = [
        {id: 1, name: "Blog 1", content: "Blog 1 content"}, 
        {id: 2, name: "Blog 2", content: "Blog 2 content"},
        {id: 3, name: "Blog 3", content: "Blog 3 content"},
        {id: 4, name: "Blog 4", content: "Blog 4 content"},
    ]
    ```

5. Now, we can return this data within the route handler function:

    ```
    router.get('/', async function(req, res, next) {

        let allBlogs = blogs;
        return res.status(200).json(allBlogs);

    });
    ```

## Test in Browser

1. Use npm run start to start up the server.
2. Go to your browser and type in localhost:3001/blogs
3. You should see the following text in your browser: 

    [{"id":1,"name":"Blog 1","content":"Blog 1 content"},{"id":2,"name":"Blog 2","content":"Blog 2 content"},{"id":3,"name":"Blog 3","content":"Blog 3 content"},{"id":4,"name":"Blog 4","content":"Blog 4 content"}]
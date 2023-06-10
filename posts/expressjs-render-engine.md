---
title: "Render Engine"
number: 2
date: "2023-05-31"
---

***

# Background

As a summary to what the template engine will do: 

1. Replace variables present in static template files with content of your choice at runtime. 

2. Turn template into a HTML file that can be sent to a client requesting for it at a given route.

***

# Basic Template

1. Look for the following code inside the app.js file:

    ```
    app.set('view engine', 'jade');
    ```

    and replace with:

    ```
    app.set('view engine', 'pug');
    ```

2. Look for a views folder and replace all files with .jade to .pug.

3. Inside you index.pug file, you can use the following template:

    ```
    html
        head
            title=pageTitle
        body
            h1=title 
    ```

    Take note of how we have assigned the title tag with a pageTitle variable and the h1 tag with the title variable.

4. Go to the index.js file in the routes folder and change the code to this:

    ```
    router.get('/', function(req, res, next) {
    res.render('index', {
        pageTitle: 'Blogs API',
        title: 'Welcome to Blogs API'})
    });
    ```

    All we are doing here is assigning the variables that is in our index.pug file with some text. So, when we make a request to this route, the template engine will generate a html file and replace those variables with the provided text that we assigned.

5. An extra thing we can do is introduce some css. Now, there should already be a style.css file inside your public/stylesheets folder. I wanted the title to appear in the middle, so I added the following css: 

    ```
    h1{
        text-align: center;
    }
    ```
    Now, all we need to do is update our template. 
    
    Add the link tag to the head tag as shown below:

    ```
    head
        title=pageTitle
        link(rel='stylesheet', href='/stylesheets/style.css')
    ``` 

# Show in browser

***
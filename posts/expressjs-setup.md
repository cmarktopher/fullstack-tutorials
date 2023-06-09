---
title: "Express.js Setup"
number: 1
date: "2023-05-29"
---

***

# Node.js

To get started, we firstly need to install Node.js on our computers. Please utilize the official Node.js website provided directly below to download the latest LTS version of Node.js:

<https://nodejs.org/en>

***

# Express.js

## Installation

Before I provide the instructions to install express.js, I will mention that for the purposes of this tutorial and to save us having to write up boilerplate code, we will be utilizing the express.js generator which will provide us with the core code and files that we will need to get started. 

Use the following link to see the official code used for this or following the step by step guide below:

<https://expressjs.com/en/starter/generator.html>


1. Create a new folder with the name of your application and move into it.

2. Within your new folder, use the following command to use express generator:

```
$ npx express-generator
```

3. Run the following command to install dependencies.

```
$ npm install
```

## Clean Up

Now, you may have noticed after installing the dependencies that some of them are deprecated, with some vulnerability warnings. One of the culprits to this is jade, which is a template engine which has now been changed to pug. Here are the steps I took to get rid of those security warnings:

1. Install pug.

```
$ npm install pug --save
```

2. Uninstall jade.

```
$ npm uninstall jade
```

3. Force audit fix.

```
$ npm audit fix --force
```

In the next tutorial, we will change the code inside our project to use pug instead of jade.

***
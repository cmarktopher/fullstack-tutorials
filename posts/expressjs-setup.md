---
title: "Express.js Setup"
number: "1."
date: "2023-05-29"
---

***

To get started, please follow the guide for install requirements.

***

# Node.js

## Download

To get started, we firstly need to install Node.js on our computers. Please utilize the official Node.js website provided directly below to download the latest LTS version of Node.js:

<https://nodejs.org/en>

***

# Express.js

## Installation

Before I provide the instructions to install express.js, I will mention that for the purposes of this tutorial and to save us having to write up boilerplate code, we will be utilizing the express.js generator which will provide us with the core code and files that we will need to get started. Use the following link to see the official code used for this:

<https://expressjs.com/en/starter/generator.html>

1. Create a new folder with the name of your application and enter it.

2. Within your new folder, use the following command to use express generator:

```
$ npx express-generator
```

3. Run the following command to install dependencies.

```
$ npm install
```

## Clean Up

Now, you may notice after installing the dependencies that some of them are deprecated and that there are some vulnerabilities. One of the culprits to this is jade, which is a template engine which has now been changed to pug. Here are the steps I took to get rid of those security warnings:

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

***
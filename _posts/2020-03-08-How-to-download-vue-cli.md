---
layout: article
title:  How to Setup and Install Vue
meta: Vue is an open source javascript framework for front-end development. It is developed by Chang Yul and maintained by the Vue core team. If you have come across the MVC
date:   2020-03-15 00:56:57 +0100    
date-2: 15 March 2020
categories: recent
description: What Every self-taught programmer ought to know before learning to code 
---
Recently, I picked up Vue as the front end framework to learn and use. Its is a pretty and easy to use framework which makes it good for beginners. 

## What is Vue?
Vue is an open source javascript framework for front-end development. It is developed by Evan You and maintained by the Vue core team. If you have come across the MVC(Model View Controller) application writing model, Vue is the View layer of the MVC. It is, as of writing, actually the fastest growing JS framework in the world and has one of the best documentation.

## Setup and Installation
Installation of Vue is pretty simple and straight forward. Vue can be set in two main ways:
 
1. *The command Line Interface*

2. *Direct in your Html file*


## Vue Direct Html Setup
This is probably the easiest way to set up a vue file. it involves linking your Html file to Vue CDN in the head of your html file. This is similar to when inserting a jquery or google analytic to your file.

Open your html file, copy and paste the code below into the head of your file.

   `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">`

Then, create a `<div>` in the body of your file and set give it an id named app `<div id='app></div`. This div tag is the wrapper of all the html code you will be writing for vue.

Finally, open a script tag at just befor the body tag closes and insert the following code

                ```
                const App = new Vue({
                    el: '#app',
                    data: {
                        message: 'Hello World'
                    },
                })
                ```

You are now set up to use Vue. The good thing about this is that you don't have to worry about Node, Babel, npm or any of these 3rd party apps. However, this method requires you have constant internet connection and doesn't allow you to work with a localhost. 

## VUe CLI Setup
CLI stands for Command Line Interface. Vue CLI allows us to develop our web apps locally on our computers through a localhost that allows our system to act as web servers before putting them out online on a live web server.

Note: Installing Vue and creating a new vue project for the first time requires that the you have an internet connection. Afterwards you can then create a new vue app without any connection.

For Vue CLI to work, we must have Node npm/yarn first installed on our computers.
For a guide on Node installation, checkout [node installation guide](http://nodejs.org).

Once you've installed node, we can go ahead and install Vue. Open up your windows command prompt as admin. Insert the following code:

        
            # install with npm
            npm install -g @vue/cli 

            # install with yarn
            yarn global add @vue/cli 
        

When this is done, we can go ahead and create our vue app. To achieve this, insert the following code:

        ` vue create vue-app`

Vue then prompts us to manually select our features or use default features. Unless you know what you are doing, you should use the default feature.

Allow Vue to download all the files neccessary and set you up. Once this is done, move into the app directory and run your server through npm/yarn.

        ```
            cd vue-app
            npm run serve

            # or
            yarn serve
        ```


That is it. You are now set up to use vue and begin development of your web app. For more on Vue check out its [documentation](https://www.vuejs.org/v2/guide/)

# Nuxt Storyblok production bug

Context you have a nuxt 3 + storyblok module application running in production mode.
Using storyblok "published" version and public access token.

## Problem 

if you change a story in storyblok and publish it. the changes will be never displayed on the website.

## Steps to reproduce

1. create a new space which includes the default "Home" page
2. create a public access token
3. publish the "home" page
4. configure the access token in nuxt.config.js
5. start server
6. you should see the home page blok json rendered with the name "Home"
7. change the name of the page in storyblok to "Home v2" 
8. save and publish the page
9. reload the page in browser
10. expected behavior: property name in the output changes from "Home" to "Home v2"
acctual result: output ist still "Home"



# Related Github Issue(s)

https://github.com/storyblok/storyblok-js-client/issues/806
To install project dependencies and start the web server, run the following commands from this directory:  

npm install  
npm start  

If you have any notes or instructions about the exercise, please write them here.

## Project Summary
My overall approach involved first whiteboarding, mocking the application UI and dataflow, and breaking the project into the following pieces:
* Feature - User can search for a GIF
* Feature - User can view list of GIFs as thumbnails
* Feature - User can page through results (pagination)
* Feature - User can click a thumbnail, in order to see the embedded GIF in modal
* Feature - User can browse through the GIFs as a slideshow

Project Architecture
* An ES6 class component (GifBrowser) sits at the top of the component hierarchy
* This compnent contains state in addition to the methods that power the app's features.
* I have implemented stateless functional components wherever else possible. 
* I have abstracted some business logic and network calls to utils.js and apiHelper.js respectively.
* I utilized the Semantic-UI-React component library.
* I utilized the Giphy-js-sdk, as recommended in documention.

Given More Time...
* I would improve the aesthetic (UI) of the app. It's currently minimal and bland.
* I would implement a loading spinner to improve user experience during data fetching.
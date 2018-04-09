// Source: https://dev.to/sabatesduran/add-custom-bootstrap-4-sass-to-create-react-app

// INSTALLATION:

//yarn add node-sass-chokidar npm-run-all bootstrap


// Add the new tasks in the package.json

/*"scripts": {
    "build-css": "node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
*/

/*
Create sass files:
Now we can create index.scss and _custom_bootstrap.scss in our styles directory (that will create an index.css when it's build).
We use '_' for skipping this file to be build independently from the index file, instead we are going to import the file inside index.scss.

My Bootstrap configuration
@import 'custom_bootstrap';

Bootstrap library
@import 'bootstrap/scss/bootstrap';

Here you can import more .scss files or write scss code.
...

*/

// import off the App component: 
    import './styles/index.css';


// For starting the app just execute 
 // yarn start
/*in your project folder 
and start changing variables, the terminal will tell you 
if your scss file has some errors and also every time you change 
something on the file will re-built the index.css and
reload the page so you can see the changes,

*/
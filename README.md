# Actively
Actively Travel App


This is a simple React app with an Express back-end

Found this tutorial on Dave Ceddia's website: https://daveceddia.com/create-react-app-express-backend/

Basically I use express generator to create a react-backend app and create-react-app for the front-end. I made sure to run the server on a different port and I made some changes to the source files.

For the react part I set the proxy under package.json and ran it. On the react side it fetches from users, which goes to the dev server to get the data. It is important to initialize with an empty array. On render it sets the state of the map of data.


# Installation

```
npm install
cd views
npm install
```
### Running Application
####  Leave Running
```
PORT=3001 node bin/www
```
#### New terminal
Now you can either 
```
cd Actively
npm start
```
or
```
cd Actively/views/
npm start
```

### Setup the Linter
```
./node_modules/.bin/eslint --init
(Select Popular Style -> AirBnB -> JSON)
```
Running Linter
```
npm run lint
```
To run on all files, go to package.json and change it to:
```
"lint": "./node_modules/.bin/eslint ."
```
To run on specify file, go to package.json and change it to:
```
"lint": "./node_modules/.bin/eslint name_of_the_file.js"
```
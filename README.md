# Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Front-end
- Create your angular project first: ng new chat
- Add any NPM dependencies that the front-end code will need. (bootstrap, socket.io)
- npm install bootstrap –save
-  npm install socket.io-client --save
- Use ng serve –open to host your angular front-end application at http://localhost:4200.
## Server
- Create a directory called “server” at the root level of the Angular website (same level
as the “src” directory)
- Initialize this as a new NPM project with npm init.
- Add the NPM dependencies that the server side code is going to require
- Express.js npm install express --save
- Socket.io npm install socket.io --save
- Cors npm install cors --save
- Create the server code as three files.
- server.js // main file
- sockets.js //module to contain socket implementation
- listen.js // module to start node server listening for requests on port 3000
- Use node server.js or nodemon server.js to host your node server
## Task 2 – Create a Chat Component
- Create a component for a chat interface. This will include a HTML form with a text input
element and a button.
- Chat messages will be displayed in an unordered list below the form.
- Add a route for this component so that it appears in the <router-outlet> when the app
starts.
- Clicking on the chat button will take the value currently in the text input and send (emit) it
to the server via a service that holds the implementation of the required socket.io code.
## Task 3 – Server side code for sockets.
- Implement code that will accept a sockets connection and emit text messages to all
connected clients as they arrive. (No express routes are quired for this to work)
- Running the finished Application
- Start the server listening at localhost:3000
- Using a browser run a version of the client at http://localhost:4200
- Open a second browser and run a version of the client at http://localhost:4200
- Submit messages from each browser and watch them appear in each of the other browser

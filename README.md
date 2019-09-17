# Chat-app
Realtime chat application

## Installing dependancies

* Set up the package.json for the project using npm command
    ``` bash
    npm init
    ```

* Install socket.io that provides the realtime web socket communication
    ``` bash
    npm i socket.io

* Install nodemon , allow our server to automatically refresh itself every time it change ,so we dont need to to restart it again
    ``` bash
    npm i --save-dev nodemon
    ```
* Create a script within the package.json ,here
    ``` javascript
    "startApp": "nodemon server.js"
    ```
    now try run this (it runs nodemon on server.js)
    ``` bash
    npm run startApp
    ```
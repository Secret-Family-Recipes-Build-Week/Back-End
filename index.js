
//Adding this for text push

//Equivalent to import
const express = require("express");
const usersRouter = require("./users/users-router");
const recipesRouter = require("./recipes/recipes-router");

//Possibly helpful
const helmet = require("helmet");
const cors = require("cors");

//Gives instance of express used to configure server
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

server.use(usersRouter);
server.use(recipesRouter);



//Error handling middleware
server.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        message: "Something went wrong"
    })
    // next();
})

server.get('/', (req, res) => {
    res.json({
        message: "API is running"
    })
});


//!!! POtentially causing weird "port in use" bug?
//Remove for hosted version?
//Listen monitors port on computer for any incoming expressions
server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})


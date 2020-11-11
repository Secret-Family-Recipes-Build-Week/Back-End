
//Equivalent to import
const express = require("express");
const usersRouter = require("./users/users-router");
const recipesRouter = require("./recipes/recipes-router");

//Gives instance of express used to configure server
const server = express();
const port = 4000;

server.use(express.json);

server.use(usersRouter);
server.use(recipesRouter);



//!!I believe this enables default next error response. Should figure out how exactly the trigger works.
server.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        message: "Something went wrong"
    })
})

server.get('/', (req, res) => {
    res.json({
        message: "API is running"
    })
});

//Remove for hosted version?
//Listen monitors port on computer for any incoming expressions
server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
//!! Double check if these are necessary
const express = require("express");
const router = express.Router();

function restrict(req, res, next) {

    next();
}

//!! Double check this too
module.exports = {restrict}
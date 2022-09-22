//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');

const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const userRoute = require('./routes/userRoutes');
const LoginRoute = require('./routes/loginRoutes');

//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());


//4 CREATE API URL
app.use('/api/user', userRoute);
app.use('/api/login', LoginRoute);


app.use(globalErrHandler);
module.exports = app;
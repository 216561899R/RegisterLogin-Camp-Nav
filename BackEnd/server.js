const app = require('./app'); //Since we have created our app module we can require the module
const dotenv = require('dotenv'); //For Reading .env File  - This file is going to be important in the futur when are going to host our database
const {Sequelize} = require('sequelize');
dotenv.config({ path: './.env'});
const sequelize = require('./config/db');

sequelize.sync();

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Application running on port ${port}`);
});

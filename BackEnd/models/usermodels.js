const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/db');
const { validateEmail } = require('../utils/validator');
const { validationResult } = require('express-validator');
const User = sequelize.define('user',{
    
    user_id:{
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      
      validate: 
    {
len:{args: [13,13],
msg : 'Incorrrect ID number length',
}
    }

    
  },
    first_name:{
        type: Sequelize.STRING,
        allowNull: false,
        errorMessage: "Firstname field cannot be empty",
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        errorMessage: "Lastname field cannot be empty",
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        errorMessage: "Gender field cannot be empty",
      },
      user_type: {
        type: Sequelize.STRING,
        allowNull: false,
        errorMessage:"User_Type field cannot be empty",
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail:true,
        
             },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
         validation: {
        isLowercase:true,
        isUppercase:true,
        isAlphanumeric: true,
        isNumeric:true,
        max:16,
        min:8,
      }
    },
 
          
      
} );

module.exports = User;

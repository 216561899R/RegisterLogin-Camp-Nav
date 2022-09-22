//CRUD - Create, Read, Update Delete
const UserModel = require('../models/usermodels');
const catchAsync = require('../utils/catchAsync');

//CREATE USER
exports.createUser = catchAsync(async(req, res, next)=>{
    const userType = await UserModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "User Created Successfully",
        userType
    })
});


exports.getUser = catchAsync(async(req, res, next)=>{
    const userType  = await UserModel.findAll()
});
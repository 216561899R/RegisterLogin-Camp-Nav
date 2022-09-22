//CRUD - Create, Read, Update Delete
const loginModel = require('../models/usermodels');
const catchAsync = require('../utils/catchAsync');


exports.compareLogin = catchAsync(async(req,res,next)=>{
    const {user_email,password}=req.body;
const LoginData = await loginModel.findOne({where:{user_email}}).catch((err)=>{
    console.log("Error:",err);
})

if(!LoginData)
return res.json({message:"USER EMAIL OR PASSWORD DOES NOT MATCH "});

if(LoginData.password !==password)
return res.json({message:"USER EMAIL OR PASSWORD DOES NOT MATCH "});
else{
    return res.json({message:"loging was successfull "});
}


});



exports.getlogin = catchAsync(async(req, res, next)=>{
 const LoginData  = await loginModel.findAll()
});
const router = require('express').Router();

const userController = require('../controller/user');


/*
router.get('/add-username', (req, res,next)=>{
    // res.send('<form action="/test/post-username" method="POST"> <input type="text" name="username">    <button type="submit"> Send </button> </form>'); res.sendFile(path.join(__dirname, 'views', 'add-   user.html'));
 });
 router.post('/post-username', (req, res, next)=>{
    console.log('data: ', req.body.username);
    res.send('<h1>'+req.body.username+'</h1>');
});*/
router
    .route("/")
    .post(userController.createUser)
    .get(userController.getUser)
    
    
module.exports = router;
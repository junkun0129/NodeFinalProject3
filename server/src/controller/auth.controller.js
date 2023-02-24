const {
    signUp,
    signIn
} = require("../middlewares/auth.middleware")


const signUpController=async(req, res, next)=>{
    
    const {email, password, name} = req.body;
    
    const signInService = await signUp({email, password, name});
    return res.json(signInService);
}

const signInController = async(req, res, next)=>{
    const {email, password} = req.body;
    const signInService = await signIn(email, password);
    
    // console.log(signInService)
    return res.json(signInService);
}

module.exports={
    signUpController, 
    signInController,
}
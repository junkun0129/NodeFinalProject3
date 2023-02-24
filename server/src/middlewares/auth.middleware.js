const JWT = require("jsonwebtoken")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")

const {jwtSecret, salt} = require("../config");

const User = require("../model/User");
const Status = require("../model/UserStatus");

const signUp = async(data)=>{
    
    const {email, password, name} = data;
    let user = await User.findOne({email})

    if(user) {
        const error = new Error("User already exists");
        error.status = 404
        throw error
    }
    
    //create status
    const firststatus = {
        level:1,
        exp:0,
        hp:20,
        maxmumHp:20,
        at:5,
    }

    const userstatus = new Status(firststatus);

    await userstatus.save();

    //create user
    user = new User({
        name,
        email,
        password,
        status:userstatus._id
    });
    const token = JWT.sign({id: user._id}, jwtSecret)

    await user.save();

    



    return(data={
        userId: user._id,
        email: user.email, 
        name: user.name, 
        status:user.status,
        token
    })
}

const signIn = async(email, password)=>{
    
    // console.log("data:",email);
    let user = await User.findOne({email}).populate(
        "status"
    );

    // console.log(user)

    if(!user){
        const error = new Error("User does not exist");
        error.status =404
        throw error 
    }

    const isValid = await bcrypt.compare(password, user.password);

    const token = JWT.sign({id: user._id}, jwtSecret);

    if(isValid){
        return(data={
            userId: user._id,
            email: user.email,
            name: user.name,
            status: user.status,
            token
        })
    }else{
        const error = new Error("incorrect password")
        error.status = 400
        throw error
    }

}

module.exports={
    signUp,
    signIn,
}
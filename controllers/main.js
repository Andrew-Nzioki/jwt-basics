
const jwt=require('jsonwebtoken')
const CustomAPIError=require('../errors/custom-error')
const login=async (req,res)=>{
//check whether username and password have bee provided
    const {username,password}=req.body

    //use mongo for validation to check whether the values for password and username
    //Joi to be used for all validation
    //check in the controller
    if(!username||!password){
        throw new CustomAPIError('please provide email and password',400)
    }
    const id=new Date().getDate()
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
      

    res.status(200).json({ msg: 'user created', token})
}


const dashboard=async (req,res)=>{
    console.log(req.user)

    const luckNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello,${req.user.username}`,secret:`Here is your authorize data, your lucky number is ${luckNumber}`})
}

module.exports={
    login,dashboard
}

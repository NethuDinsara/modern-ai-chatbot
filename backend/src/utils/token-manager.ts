import jwt from 'jsonwebtoken'

//making a new token
export const   createToken = (id: String,email:string,expiresIn) =>{
    const payload= {id,email};//an object
    const token= jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn,
    });//creating a new token

    return token;

}
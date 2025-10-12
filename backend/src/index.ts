import express from "express"

const app=express();

//GET - 
//PUT
//POST
//DELETE

//routes endpoints
app.get("/hello",(req,res,next)=>{
  return res.send("Hello");
})


app.listen(5001,()=>console.log("Server Open"))
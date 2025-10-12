import express from "express"
import {config} from 'dotenv'

config();

const app=express();

//middlewear defining 
app.use(express.json());

//connections and listeneres
app.listen(5001,()=>console.log("Server Open"))


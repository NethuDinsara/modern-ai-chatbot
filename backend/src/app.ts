import express from "express";
import {config} from 'dotenv';
import morgan from 'morgan';
import appRouter from "./routes/index.js";

config();

const app=express();

//middlewear defining 
app.use(express.json());

//remove it in production (only needs for testing)
app.use(morgan("dev"));

app.use("/api/v1",appRouter);

export default app;
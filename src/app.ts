import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from './middleware/globalErrorHandler';
import userRouter from './user/userRouter';

const app=express();

app.use(express.json())

// Routes
app.get('/',(req,res)=>{
    res.send("Wellcome to our Book store management system");
})

app.use("/api/users",userRouter);

// global error handler
app.use(globalErrorHandler);

export default app;
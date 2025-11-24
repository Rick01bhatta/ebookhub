import express, { NextFunction, Request, Response } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { config } from './config/config';
import globalErrorHandler from './middleware/globalErrorHandler';

const app=express();

// Routes
app.get('/',(req,res)=>{

    res.send("Wellcome to our Book store management system");
})

// global error handler
app.use(globalErrorHandler);

export default app;
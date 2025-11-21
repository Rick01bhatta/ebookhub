import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send("Wellcome to our Book store management system");
})

export default app;
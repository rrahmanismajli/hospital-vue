//const express=require('express');
import express from 'express';
import {StatusCodes,ReasonPhrases} from 'http-status-codes';
import departmentsRouter from './routes/departmentsRouter';
import cors from 'cors';

 const PORT = 3001;

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
        origin:'',
    })
);
app.get('/health',(req,res)=>{
    res.json({healthy:true})
});
app.get('/user',(req,res) => {
    res.json({name:'Ernesa',email:'ernesa@gmail.com'})
});
app.use('/departments',departmentsRouter);

app.get('*',(req,res)=>{
    return res.status(StatusCodes.NOT_FOUND).json({error:ReasonPhrases.NOT_FOUND})
});

app.listen(PORT,()=>{
    console.log(`Departmenti runing on port ${PORT}`);
});



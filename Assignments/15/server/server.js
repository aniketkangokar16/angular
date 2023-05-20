const express = require('express');
const app=express();

const {MongoClient}=require('mongodb');

const URL="mongodb://127.0.0.1:27017";

//Handling CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
    
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");
    
    next();
    
    });

app.listen(5100,function(req,res)
{
 console.log("Marvellous server started successfully");
});

const client=new MongoClient(URL);

app.get('/getBatches',GetBatches);

async function GetBatches(req,res)
{
    let result=await client.connect();
    let db=result.db("Marvellous");
    data= await db.collection("Batches");
	data = await data.find().toArray();
	console.log(data);
    res.send(data);
}
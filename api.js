const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

//it's required when crud operation perform(like POST, DELETE, PUT)
app.use(express.json());

app.get('/', async(req, res)=>{
let data = await dbConnect();
data = await data.find().toArray()
console.log(data)
    res.send(data)
})

app.post('/', async(req, res)=>{
    //send data from postman to nodejs(add new data in API)
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put('/:name', async(req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    console.log(req.body)
    res.send({result:"update"})
})

app.delete("/:id", async(req, res)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})


app.listen(5000);
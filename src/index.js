const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post("/add",(req,res)=>{
    const numbers=req.body
    const sum=numbers.num1+numbers.num2;
    res.send(200).send({
        status:"Success",
        message:"the sum of given two numbers",
        sum: sum
    })
})

// your code goes here
app.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})

app.post("/subtract",(req,res)=>{

})
app.post("/multiply",(req,res)=>{

})
app.post("/divide",(req,res)=>{

})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
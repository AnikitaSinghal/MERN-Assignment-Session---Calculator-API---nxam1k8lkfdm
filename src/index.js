const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const upperlimit=1000000
const lowerlimit=-1000000
app.post("/add",(req,res)=>{
    const {num1,num2}=req.body
    
    if(num1>upperlimit||num1<lowerlimit||num2>upperlimit||num2<lowerlimit||
        !isNaN(num1)||!isNaN(num2))
        res.status(400).send({
            status:"Error",
            message:"Error occured"
        })
    res.status(200).send({
        status:"Success",
        message:"the sum of given two numbers",
        sum: nnum1+num2
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
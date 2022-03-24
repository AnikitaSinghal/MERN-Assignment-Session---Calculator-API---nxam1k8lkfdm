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
    if(num1>upperlimit||num2>upperlimit)
    res.status(400).send({
        status:"Error",
        message:"Overflow"
        });
    if(num1<lowerlimit||num2<lowerlimit)
    res.status(400).send({
        status:"Error",
        message:"Underflow"
        });
    if(typeof num1!=="number" || typeof num2!=="number")
    res.status(400).send({
        status:"Error",
        message:"Invalid Data types"
        });
    res.status(200).send({
        status:"Success",
        message:"the sum of given two numbers",
        sum:num1+num2,
    });
});
app.post("/subtract",(req,res)=>{
    const {num1,num2}=req.body
    if(num1>upperlimit||num2>upperlimit)
    res.status(400).send({
        status:"Error",
        message:"Overflow"
        });
    if(num1<lowerlimit||num2<lowerlimit)
    res.status(400).send({
        status:"Error",
        message:"Underflow"
        });
    if(typeof num1!=="number" || typeof num2!=="number")
    res.status(400).send({
        status:"Error",
        message:"Invalid Data types"
        });
    res.status(200).send({
        status:"Success",
        message:"the difference of given two numbers",
        difference:num1-num2,
    });
});
app.post("/multiply",(req,res)=>{
    const {num1,num2}=req.body
    if(num1>upperlimit||num2>upperlimit)
    res.status(400).send({
        status:"Error",
        message:"Overflow"
        });
    if(num1<lowerlimit||num2<lowerlimit)
    res.status(400).send({
        status:"Error",
        message:"Underflolw"
        });
    if(typeof num1!=="number" || typeof num2!=="number")
    res.status(400).send({
        status:"Error",
        message:"Invalid Data types"
        });
    res.status(200).send({
        status:"Success",
        message:"the sum of given two numbers",
        result: num1*num2,
    });
});


// your code goes here
app.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
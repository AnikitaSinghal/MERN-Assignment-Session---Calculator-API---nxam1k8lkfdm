const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})

const checkValidInput=(req,res,next)=>{
    const {num1,num2}=req.body;
    if(num1>=upperlimit || num2>=upperlimit )
    return res.status(200).send({
        status:"error",
        message:"Overflow"
        });
    if(num1<lowerlimit || num2<lowerlimit )
    return res.status(200).send({
        status:"error",
        message:"Underflow"
        });
    if(typeof num1!=="number" || typeof num2!=="number")
    return res.status(200).send({
        status:"error",
        message:"Invalid data types"
        });
        next();
};

app.use(checkValidInput);


const upperlimit=1000000;
const lowerlimit=-1000000;

// const setPrecision=(num,precision)=>{
//     const factor=Math.pow(0,precision)
//     const result=Math.round(num*factor)/factor
//     return result
// }

//Addition
app.post("/add",(req,res)=>{
    const {num1,num2}=req.body;
    sum=num1+num2;
    if(sum>upperlimit)
    res.status(200).send({
        status:"Success",
        message:"Overflow",
        
    });
    res.status(200).send({
        status:"Success",
        message:"the sum of given two numbers",
        sum:num1+num2,
    });
});

//Subtract
app.post("/sub",(req,res)=>{
    const {num1,num2}=req.body;
    res.status(200).send({
        status:"success",
        message:"the difference of given two numbers",
        difference:num1-num2,
    });
});

//Multiply
app.post("/multiply",(req,res)=>{
    const {num1,num2}=req.body;
    res.status(200).send({
        status:"Success",
        message:"The product of given numbers",
        result: num1*num2,
    });
});

//Divide
app.post("/divide",(req,res)=>{
    const {num1,num2}=req.body;
    if(num2==0)
    res.status(200).send({
        status:"error",
        message:"Cannot divide by zero"
    });
    res.status(200).send({
        status:"success",
        message:"The division of given numbers",
        result:num1/num2,
    });
});






app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
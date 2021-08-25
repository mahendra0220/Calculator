const express=require("express");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  let a=Number(req.body.num1);
  let b=Number( req.body.num2);
  let result=a+b;
  res.send("Sum is : "+result);
});
app.listen(3000,function(){
    console.log("server is running on 3000");
});

const express=require("express");
const bodyParser=require("body-parser");
 const date=require(__dirname+"/date.js");
const app=express();


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
mongoose.connect("mongodb//localhost/todolistDB");
let items =["Buyfood","Cook food","Eat food"];
let workitem=[];

app.set("view engine","ejs");

app.get("/",function(req,res){

let day=date.getDate();

res.render("list",{listtittle: day,newListItems:items});

});
app.post("/",function(req,res){
  let item=req.body.newitem;
  if(req.body.list==="Work"){
workitem.push(item);
res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");
  }
  
});
app.get("/work",function(req,res){
res.render("list",{listtittle:"Work List",newListItems:workitem})
});

app.get("/about",function(req,res){
res.render("about");
});
app.listen(3000,function(){
    console.log("Server is runing at port 3000");
});
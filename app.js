const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))

var items = ["WAKE UP","NETFLIX"]


app.set('view engine', 'ejs')

app.get("/", function(req,res){

    var currentDay = new Date();

    var options ={
        weekday: "long",
        day : "numeric",
        month: "long"
    }

    var today = currentDay.toLocaleDateString("en-IN", options)

    res.render("list",{
        day:today,
        ListItem: items
    })

    
})

app.post("/", function(req,res){
  var item = req.body.newItem; 
   items.push(item)
   res.redirect("/")
})

app.listen(3000,function(){
    console.log("SERVER STARTED ON PORT 3000");
})
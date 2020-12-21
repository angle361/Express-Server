const { response } = require("express");
const express = require("express");
const app = express();
app.get("/",function(req,res){     //when browser makes request to server
    res.send("<h1>Hello World</h1>");
});

app.get("/about",function(req,res){     //when browser makes request to server
    res.send("<h1>Hi!! Sanyam Here</h1>");
});

app.get("/contact",function(req,res){     //when browser makes request to server
    res.send("<h1>Hello Wcmskdskorld</h1>");
});

app.get("/project",function(req,res){     //when browser makes request to server
    res.send("<h1>Hello projects World</h1>");
});
app.listen(3000,function(){
    console.log("server started");
});
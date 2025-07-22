const express =require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const port = 3000;

// set up ejs tempelate engine

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

//middleware to server static files

app.use(express.static(path.join(__dirname, "public")));

//body parser for post data
app.use(express.urlencoded({extended: true}));

//routes

app.get("/", (req,res)=>{
    res.render("index",{title: "home page"})
})

app.get("/about",(req,res)=>{
    res.render("about",{title: "about us"})
})

app.get("/users",(req,res)=>{
    const users = [
        {name: "alice",age: 24},
        {name: "aurthor",age: 35},
        {name: "margon",age: 45},
        {name: "jhon marston",age: 30}
    ];
    res.render("users",{title: "user list", users: users})
})

app.post("/submit",(req,res)=>{
    const {name,age} = req.body;
    res.send(`received name: ${name}, age:${age}`)
})

//404 page

app.use((req,res)=>{
    res.status(404).send("page not foud")
})

app.listen(port, ()=>{
    console.log(`server running in the http://localhost:${port}`)
})
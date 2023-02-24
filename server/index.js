const express = require("express")
const app = express()
require('dotenv').config()
require("./src/util/db")

const http = require("http").Server(app)
const path = require("path")
const cors = require("cors")

const config = require("./src/config")

app.use(cors())

app.use(express.json());

require("./src/util/soket")(http);


app.get(("/"), (req, res, next)=>{
    res.send("<h1>home<h1>")
})

app.use(("/auth"), require("./src/route/auth"))
app.use(("/enemy"), require("./src/route/enemy"))
app.get(("/i"), (req, res, next)=>{
    res.send(";lkj")
})



http.listen(config.port, ()=>console.log("server is connected "+config.port))
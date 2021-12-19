const express = require("express")
const exphbs = require("express-handlebars")

const servidor = express()
const motor = exphbs.create({defaultLayout:"layout",extname:".hbs"})

servidor.engine(".hbs",motor.engine)
servidor.set("view engine",".hbs")

servidor.get("/",(req,res)=>{
    res.render("home")
})

servidor.get("/usuarios",(req,res)=>{
    res.render("usuarios")
})

servidor.get("/mensajes",(req,res)=>{
    res.render("mensajes")
})

servidor.get("/perfil",(req,res)=>{
    res.render("perfil")
})

servidor.get(/\/api\/[\w]+/,(req,res)=>{
    res.json([])
})

servidor.listen(8080)
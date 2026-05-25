/// server.js
//create HTTP server
//import express module
import exp from 'express'
import { userApp } from "./APIS/userapi.js";
import { productApp } from "./APIS/productapi.js";
//create server
const app=exp()
//assign port number
app.listen(3000,()=>console.log('HTTP server listening in port 3000'))
app.use(exp.json())
app.use('/user-api',userApp)
app.use('/product-api',productApp)

app.listen(3000,()=>{
    console.log("server running on port 3000");
});
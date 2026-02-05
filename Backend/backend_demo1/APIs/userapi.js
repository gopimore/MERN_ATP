///userapi.js

import exp from 'express'
//how to create mini express(seperate route)app
export const userApp=exp.Router()
let users=[]
userApp.get('/users',(req,res)=>{
    //send resonse to client
    res.status(200).json({message:'All Users',payload:users});
    //console.log(users)
})
//get req handling route(Read uers)
userApp.post('/users',(req,res)=>{
   let newUser=req.body;
   users.push(newUser)
   res.status(201).json({message:"User created",payload:newUser})
   //console.log('new user',newUser)
})
//post req 
userApp.put('/users', (req, res) => {
    let modifyUser = req.body
    let index = users.findIndex(ele => ele.id === modifyUser.id)
    if (index === -1) {
        return res.status(404).json({ message: "user not found" })
    }
    // update user
    users[index] = modifyUser
    res.status(202).json({message: "user modified",payload: modifyUser})
})
//read user by id
userApp.get('/users/:id', (req, res) => {
    let userId = Number(req.params.id)
    // find user
    let user = users.find(userObj => userObj.id === userId)
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }
    res.status(200).json({message: "user found",payload: user})
})
//delete req
userApp.delete('/users/:id', (req, res) => {
    let userId = Number(req.params.id)
    let index = users.findIndex(user => user.id === userId)
    if (index === -1) {
        return res.status(404).json({ message: "user not found" })
    }
    // remove user
    users.splice(index, 1)
    res.status(200).json({message: "user deleted successfully"})
})
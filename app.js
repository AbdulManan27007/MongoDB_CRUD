
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/mongodbpractice"); // Corrected port number
// mongodbpractice--> Database name in mongoDB
const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});
//'Users' Database folder name where to store data
const UserModel = mongoose.model("users", UserSchema); 

app.get("/update", async (req, res) => {       //username where u store  // update
    let updateduser = await UserModel.findOneAndUpdate({username:"abdulmanan4066"}, {name:"Abdul Manan Ilyas"},{new: true} )



//create user in database
// app.get("/create", async (req, res) => {
//     let createdUser = await UserModel.create({
//         name: "AbdullManan",
//         email: "abdulmanan@gmail.com",
//         username: "abdulmanan4066"
//     });


    res.send(updateduser);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

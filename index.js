const express = require('express')
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb://localhost:27017/Test1')

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/",async (req , res) => {
   const US = await UserModel.find();
   res.json(US)
});
app.listen(3000, () => {
    console.log('Example app listen on port 3000');
});
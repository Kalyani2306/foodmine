const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/food-ordering', {useNewUrlParser: true}).catch(e=>{console.error("connection error: " + e.message)});

const db=mongoose.connecction
module.exports =db
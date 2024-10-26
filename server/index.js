const express = require('express');
const bodyParser = require('body-parser')
const cors=require('cors');

const db =require('./db')

const app = express();
const productRouter = require('./router/productRouter');
let corsOptions ={
    origin:"http://localhost:3000"
}
app.use(cors(corsOptions)) 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req,res)=>{
res.json({message:"welcome to food ordering"})
})
const port =process.env.PORT || 8080

app.listen(port, ()=>console.log(`Server is running on port ${port}`))
app.use('/api/',productRouter)
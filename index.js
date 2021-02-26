const express = require('express')
const app = express()
const articleRouter = require('./Routes/articleRoute')
const mongoose = require('mongoose')
const cors = require('cors')


//listening to requests

app.listen(3000,()=>{
    console.log("hello from server ");
})
// Db connection
mongoose.connect('mongodb+srv://ghassen:minouchloukil@cluster0.3h3ou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
mongoose.connection.on('connected', () => console.log('Connected to database'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ',err));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Route middlewares
app.use('/articles',articleRouter)


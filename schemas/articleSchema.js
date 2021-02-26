const mongoose = require('mongoose')
const articleSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true 
    },
    price : {
        type : String ,
        required : true 
    },
    picture : {
        type : String ,
        required : true 
    }
    
})
module.exports =mongoose.model('Articles',articleSchema)
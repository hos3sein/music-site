const mongo = require('mongodb').MongoClient;

const mongoos = require('mongoose');

const url = 'mongodb+srv://kianlucifer0098:Lucifer252552255@cluster0.2apbqjv.mongodb.net?retryWrites=true&w=majority'
const shima = mongoos.Schema;

mongoos.connect(url)
    .then((resault) => console.log('connected'))
    .catch((err)=> console.log(err))

// users data 
    
const blog = new shima({
    name:{
        type : String,
        require : true
    },
    
    // email:{
    //     type : String,
    //     require : true
    // },
    
    password : {
        type : String,
        require : true
    },
    username : {
        type : String ,
        require : true
    },
    link : {
        type : String,
        require:true
    },
    content :{
        type : String,
        require : true
    },
    music1 : {
        type: String,
        require : true
    },
    listen_link:{
        type: String,
        require : true
    },
    tag :{
        type : String,
        require : true
    } 
})


const B = mongoos.model('data' , blog)
module.exports = B;
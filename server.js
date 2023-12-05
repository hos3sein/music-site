const express = require('express')
const DB = require('./database.js')
const http = require('http')
// const alert = require('alert')
// import alert from 'alert'
const { Server } = require("socket.io");
// const Mdb = new MongoClient()
const app = express();
 const server = http.createServer(app);
 const io = new Server(server);
const dbrout = require('./db/dbrouting')
const simplerout = require('./db/rout')
const api = require('./db/api')


server.listen(3000 , ()=>{
    console.log('app listening')
})

app.use(express.urlencoded({extended:true}))

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use(simplerout)

app.use(dbrout)

app.use(api)

 
app.use((req , res)=>{
    res.status(404).render('404.ejs')
})



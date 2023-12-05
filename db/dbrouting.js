const express = require('express')
const DB = require('../database.js')

const rooter = express.Router()




rooter.post('/login-to-cms' , (req , res)=>{
    // console.log(req.body)
    DB.find({username : req.body.username})
    .then((resault) => {
        if( resault[0].password == req.body.password ){
            res.status(200).render('cms.ejs' , {music_list:'' , adminname : 'hossein'})
        }else{
            
            res.render('auth.ejs' , {alert : 'you cant log in to cms '})
        
        }
    })
    .catch((err) => console.log(err))
})



rooter.use('/downloadpage/:name' , (req , res )=>{
    console.log(((req.params.name)))
    if (req.params.name == 'news'){
        res.status(200).redirect('news')
    }else if(req.params.name == 'songs'){
        res.status(200).redirect('songs')
    }else if(req.params.name == 'textgraphy'){
        res.status(200).redirect('textgraphy')
    }else if(req.params.name == 'biography'){
        res.status(200).redirect('biography')
    }else if(req.params.name == 'gallery'){
        res.status(200).redirect('gallery')
    }else if(req.params.name == 'signIn'){
        res.status(200).redirect('signIn')
    }else if(req.params.name == 'signUn'){
        res.status(200).redirect('signUp')
    }else{
        const nam = req.params.name
        DB.find({name : nam})
        .then((resault)=>{
            // console.log(resault[0].link)
            res.status(200).render('downloadpage.ejs' , {songname : req.params.name , link : resault[0].link})
        })
        .catch((err) => console.log(err))
        
    }
    
})


rooter.post('/auth',(req , res)=>{
    const user = req.body
    const username = (user['username'])
    const password = (user['password'])
    // const equal = DB.find
    DB.find({username : username , password : password})
    .then((resault) =>{
        if (resault.length != 0){
            console.log(resault)
        }else{(console.log('user not found'))}
    })
    .catch((err) => console.log(err))
})

rooter.post('/register' , (req , res)=>{
    // console.log('register checked')
    const B = new DB(
        req.body
    )
    B.save()
    // window.localStorage.setItem(req.body)
    .then((resault) => console.log('user data saved!'))
    .catch((err) => console.log(err))
})




rooter.use('/textshower/:name' , (req , res ,next )=>{
    const nam = req.params.name
    DB.find({name : nam})
    .then((resault) => {
        res.status(200).render('textshowwer.ejs' , {name : nam , content : resault[0].content}) })

})



module.exports = rooter
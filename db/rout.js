const express = require('express')
const DB = require('../database.js')

const rooter = express.Router()


rooter.get('/' , (req , res , )=>{
    res.status(200).render('home.ejs')
    
})

rooter.get('/admin' , (req,res)=>{
    console.log('check')
    res.status(200).render('auth.ejs' , {alert : ''})
})

rooter.get('/signIn' , (req , res ,  )=>{
    res.status(200).render('sign-in.ejs')
    
})

rooter.get('/signUp' , (req , res ,  )=>{
    res.status(200).render('sign-up.ejs')
    
})

rooter.get('/songs' , (req,res , )=>{
    res.status(200).render('song.ejs')
})

rooter.get('/textgraphy' , (req,res ,  )=>{
    res.status(200).render('text-graphy.ejs')
    
})

rooter.get('/biography' , (req,res , )=>{
    res.status(200).render('biography.ejs')
    
})
rooter.get('/gallery' , (req,res , )=>{
    res.status(200).render('gallary.ejs')
    
})
rooter.get('/musicvideo' , (req,res , )=>{
    res.status(200).render('support.ejs')
})

rooter.get('/news' , (req,res , )=>{
    res.status(200).render('news.ejs')
    
})


module.exports = rooter
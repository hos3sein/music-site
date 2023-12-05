const DB = require('../database.js')


const getmusic = (req , res)=>{
    DB.find({tag : 'music'})
    .then((resault) => {
        res.render('cms.ejs' , { music_list : resault  , adminname : 'hossein'})
    })
    .catch((err) => console.log(err))
}


const savemusic = (req , res)=>{
    req.body['tag'] = 'music';
    console.log(req.body)
    const B = new DB(
        req.body
    )
    B.save()
    .then((resault) => res.render('cms.ejs' , {music_list:'' , adminname : 'hossein'}) )
    .catch((err) => console.log(err))
}


const deletmusic = (req , res)=>{
    DB.findByIdAndDelete(req.body.id)
    .then((resault) => res.render('cms.ejs' , {music_list:'' , adminname : 'hossein'}) )
    .catch((err) => console.log(err))
}



const savenews = (req , res)=>{
    req.body['tag'] = 'news'
    const NEWS = new DB(
        req.body
    )
    NEWS.save()
    .then((resault) => res.render('cms.ejs'  , {music_list:'' , adminname : 'hossein'}))
    .catch((err) => console.log(err))
}


const savetext = (req ,res) =>{
    req.body['tag'] = 'txt'
    const TXT = new DB(
        req.body
    )
    TXT.save()
    .then((resault) => res.render('cms.ejs' , {music_list:'' , adminname : 'hossein'}) )
    .catch((err) => console.log(err))
}



module.exports = {
    getmusic,
    savemusic,
    deletmusic,
    savenews,
    savetext
}
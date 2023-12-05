const express = require('express')
const controler = require('../controlers/dbcontrols')

const rooter = express.Router()


rooter.get('/get-music-list' , controler.getmusic)

rooter.post('/upload-music' , controler.savemusic)

rooter.post('/delet-music' , controler.deletmusic)

rooter.post('/upload-news' , controler.savenews)

rooter.post('/upload-txt' , controler.savetext)


module.exports = rooter
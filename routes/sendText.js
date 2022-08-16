const express = require('express')
const router = express()
const service = require('../services/sendText')
const moment = require('moment')

router.get('/',  (req,res)=>{
    let message = req.body
    res.json({
        saludo:'hola Camilo',
        message:{
            message
        }
    })
})

router.post('/',  async (req,res)=>{
    const {auth, message} = req.body
    service.sendTemplate(auth,message).then(logs =>{
        console.log(`routes ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} -------- ${logs}`);
        res.json(logs)
    })

})

module.exports = router













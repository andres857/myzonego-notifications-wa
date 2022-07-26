const express = require('express')
const router = express()
const service = require('../services/messages')

// send videos
router.post('/',async (req,res)=>{
    const {auth,numbersToNotificate,message } = req.body
    const msg = await service.sendMsgWithVideo(auth,numbersToNotificate[0].phone,message[2].urlVideo, message[2].message)
    res.status(201).json({
        error:'',
        message: msg.response.status
    })
})

module.exports = router













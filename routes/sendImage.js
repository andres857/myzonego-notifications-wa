const express = require('express')
const router = express()
const service = require('../services/messages')

// send msg with images
router.post('/',async (req,res)=>{
    const {auth,numbersToNotificate,message } = req.body
    const msg = await service.sendMsgWithImage(auth,numbersToNotificate[0].phone,message[1].urlImage, message[1].message)
    if (msg.response.status != 'success'){
        console.error(msg)
    }else{
        res.status(201).json({
            error:'',
            status: msg.response.status,
        })
    }
})

module.exports = router













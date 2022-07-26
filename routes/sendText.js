const express = require('express')
const router = express()
const service = require('../services/messages')

router.post('/',async (req,res)=>{
    const {auth,numbersToNotificate,message } = req.body
    const msg = await service.sendMsgText(auth,numbersToNotificate[0].phone,message[0].message)
    if (msg.status != 'success'){
        console.error(msg)
    }else{
        res.status(201).json({
            error:'',
            status: msg.status,
        })
    }
})

module.exports = router













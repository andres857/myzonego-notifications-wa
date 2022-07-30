const express = require('express')
const router = express()
const service = require('../services/messages')

router.post('/', async (req,res)=>{
    const {auth,numbersToNotificate,message } = req.body    
    const logs = await service.sendMsgText(auth,numbersToNotificate,message[0].message)
    console.log(logs);
    res.status(201).json(logs)
})

module.exports = router













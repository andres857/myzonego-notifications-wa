const express = require('express')
const router = express()
// const service = require('../services/messages')
const service = require('../services/sendText')

router.post('/', async (req,res)=>{
    // const {auth,numbersToNotificate,message } = req.body    
    // const logs = await service.sendMsgText(auth,numbersToNotificate,message[0].message)
    const {auth, numbersToNotificate} = req.body
    const logsRequest = await service.sendTemplate(auth,numbersToNotificate)
    // console.log(logsRequest);
    res.status(201).json(logsRequest)
})

module.exports = router













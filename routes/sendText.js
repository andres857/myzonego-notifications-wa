const express = require('express')
const router = express()
const service = require('../services/sendText')

router.post('/', async (req,res)=>{
    // const {auth,numbersToNotificate,message } = req.body    
    // const logs = await service.sendMsgText(auth,numbersToNotificate,message[0].message)
    const {auth, message} = req.body
    const response = await service.sendTemplate(auth,message)
    res.status(201).json({
        response
    })
})

module.exports = router













const express = require('express')
const router = express()
const service = require('../services/sendText')

router.post('/', async (req,res)=>{
    // const {auth,numbersToNotificate,message } = req.body    
    // const logs = await service.sendMsgText(auth,numbersToNotificate,message[0].message)
    const {auth, message} = req.body
    try {
        service.sendTemplate(auth,message).then((request)=> console.log(request))
        
    } catch (error) {
        res.json(error)
    }
})

module.exports = router













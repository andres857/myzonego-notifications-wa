const express = require('express')
const router = express()
const service = require('../services/sendText')

router.post('/',  async (req,res)=>{
    // const {auth,numbersToNotificate,message } = req.body    
    // const logs = await service.sendMsgText(auth,numbersToNotificate,message[0].message)
    const {auth, message} = req.body
    // try {
    //     let rta = await service.sendTemplate(auth,message)
    // } catch (error) {
    //     res.json(error)
    // }
    service.sendTemplate(auth,message).then(logs =>{
        console.log(`routes ${new Date()} -------- ${logs}`);
        res.json(logs)
    })

    // console.log(`--------------------${logs}`)
    // 
})

module.exports = router













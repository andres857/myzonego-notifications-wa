const express = require('express')
const router = express()
const service = require('../services/messages')

router.post('/',async (req,res)=>{
    const {auth,numbersToNotificate,message } = req.body
    
    async function sendMsgTextAll(){
        const logs = []
        numbersToNotificate.forEach(async function(item){
            const msg = await service.sendMsgText(auth,item.phone,message[0].message)
            logs.push(msg)
            console.log(logs);
        });
        return logs
    }

    async function main(){
        const statusmsgs = await sendMsgTextAll()
        console.log('hola Mundo');
    }
    main()



    // console.log(logs);
        // if (msg.status != 'success'){
        //     console.error(msg)
        // }else{
        //     res.status(201).json({
        //         error:'',
        //         status: msg.status,
        //     })
        // }

})

module.exports = router













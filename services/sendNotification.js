const axios = require('axios')
const template = require('../templates-wa/new_content_to_group')
const graph = 'https://graph.facebook.com/v13.0/101157906035627/messages'
const moment = require('moment')

async function sendTemplate(auth,message){
    
    return new Promise ((resolve,reject)=>{
        let logs = []
        message.numbersToNotificate.forEach( async element => {   
            let phoneId = auth.wa_phoneNumberId
            let graph = `https://graph.facebook.com/v13.0/${phoneId}/messages`
            let contentName = message.content_name
            let group = message.group
            let zone = message.zone
            let urlImage = message.image
            
            const templateHelloWorld = template(element.phone,element.name,contentName,group,zone,urlImage)     
                axios.post(graph,templateHelloWorld, {
                    headers: {
                        Authorization: `Bearer ${auth.wa_accessToken}`,
                    },
                }).then((request)=>{
                    logs.push({
                        status:request.status,
                        phone: element.phone,
                        startConversation: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        endsConversation: moment().add(1,'day').format("dddd, MMMM Do YYYY, h:mm:ss a"),
                    })
                    if (logs.length === message.numbersToNotificate.length){
                        resolve(logs)
                    }
                    console.log(`service ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} -------- ${logs}`);
                }).catch(e => {
                    reject(e)
                })
        })
    })
}

module.exports = {
    sendTemplate
}
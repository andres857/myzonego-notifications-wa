const axios = require('axios')
const getTemplate = require('../templates-wa/new_notification')

const moment = require('moment')

async function sendTemplate(auth,message){
    return new Promise ((resolve,reject)=>{
        let logs = []

        let graph = `https://graph.facebook.com/v13.0/${auth.wa_phoneNumberId}/messages`
        let typeNotification = message.typeNotification
        let contentName = message.content_name
        let group = message.group
        let zone = message.zone
        let urlImage = message.image

        let template = getTemplate('', '', typeNotification, contentName, group, zone, urlImage)

        try {
            message.numbersToNotificate.forEach( async element => {   
                template.to = element.phone
                template.template.components[1].parameters[0].text = element.name
                console.log(template);
                axios.post(graph,template, {
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
                }).catch((error) => {
                    console.log(error);
                    reject(error)
                })
            })
        } catch (error) {
            console.log(error);
            reject(error.message)
        }
    })
}

module.exports = {
    sendTemplate
}
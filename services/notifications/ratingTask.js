const axios = require('axios')
const ratingTaskTemplate = require('../../templates-wa/rating_task')
const moment = require('moment')

async function sendTemplate( client, auth, message ){
    return new Promise ((resolve,reject)=>{
        let logs = []

        let graph = `https://graph.facebook.com/v13.0/${auth.wa_phoneNumberId}/messages`
        let task = message.nameTask
        let rating = message.ratingTask
        let group = message.group
        let urlImage = message.image
        let templateName =  client + '_rating_task'

        let template = ratingTaskTemplate( '', '', templateName, task, rating, group, urlImage )

        try {
            message.numbersToNotificate.forEach( async element => {   
                template.to = element.phone
                template.template.components[1].parameters[0].text = element.name
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
                    // console.log(error);
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
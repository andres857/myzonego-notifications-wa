const axios = require('axios')
const template = require('../templates-wa/wa_hello_word')
const graph = 'https://graph.facebook.com/v13.0/101157906035627/messages'

let logs = []

function returnLogs(logs){
    return logs
}

async function sendTemplate(auth,message){

       message.numbersToNotificate.forEach(async element => {
            const templateHelloWorld = template(element.phone)

            axios.post(graph,templateHelloWorld, {
                headers: {
                    Authorization: `Bearer ${auth.wa_accessToken}`,
                },
            }).then((request)=>{
                logs.push({
                    status:request.status,
                    phone: element.phone,
                    date: new Date()
                })
            }).catch(e=>{console.error(e)})
        })
        console.log(`***********${logs}`);
}

module.exports = {
    sendTemplate
}
const axios = require('axios')
const template = require('../templates-wa/wa_hello_word')
const graph = 'https://graph.facebook.com/v13.0/101157906035627/messages'


async function sendTemplate(auth,phoneToNotificate){
    let logs = []
    try {
        
        for (let i = 0; i < phoneToNotificate.length; i++) {
            console.log(`---------------${phoneToNotificate[i].phone}-----------------`);
            const templateHelloWord = template(phoneToNotificate[i].phone,'hello_world')
            const request = await axios.post(graph,templateHelloWord, {
                headers: {
                  Authorization: `Bearer ${auth[1].wa_accessToken}`,
                },
            })
            logs.push(request.status)
            console.log(logs);
        }
        return logs
    } catch (error) {
        console.error(error.code);
    }
}

module.exports = {
    sendTemplate
}
const axios = require('axios')
const template = require('../templates-wa/wa_hello_word')
const graph = 'https://graph.facebook.com/v13.0/101157906035627/messages'

function returnLogs(logs){
    return logs
}
async function sendTemplate(auth,message){
    let logs = []
    try {
       message.numbersToNotificate.forEach(async element => {
            const templateHelloWorld = template(element.phone)

            return new Promise((resolve,reject)=>{
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
                    resolve({
                        return logs;
                    })

                }).catch(e => console.error(e))
            })
        });
    } catch (error) {
        console.log(error.code);
        return error
    }

}

module.exports = {
    sendTemplate
}
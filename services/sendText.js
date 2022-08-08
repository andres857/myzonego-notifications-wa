const axios = require('axios')
const template = require('../templates-wa/wa_hello_word')
const graph = 'https://graph.facebook.com/v13.0/101157906035627/messages'


async function sendTemplate(auth,message){
    let logs = []
    try {
        message.numbersToNotificate.forEach(async element => {
            const templateHelloWorld = template(element.phone)
            const request = await axios.post(graph,templateHelloWorld, {
                headers: {
                  Authorization: `Bearer ${auth.wa_accessToken}`,
                },
            })
            logs.push(request.status)
            console.log(request.status);
        });
        return logs
    } catch (error) {
        console.log(error);
    }

}




// try {
//     for (let i = 0; i < numbersToNotificate.length; i++) {
//         console.log(`---------------${numbersToNotificate[i].phone}-----------------`);
//         const templateHelloWord = template(phoneToNotificate[i].phone,'hello_world')
//         const request = await axios.post(graph,templateHelloWord, {
//             headers: {
//               Authorization: `Bearer ${auth[1].wa_accessToken}`,
//             },
//         })
//         logs.push(request.status)
//         console.log(logs);
//     }
//     return logs
// } catch (error) {
//     console.error(error.code);
// }


module.exports = {
    sendTemplate
}
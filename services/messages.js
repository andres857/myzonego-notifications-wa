const newConnection = require('../utils/waCloudApi')

async function sendMsgText(auth,phoneToNotificate,message){
    // create a new connetion
    const connection = newConnection(auth[1].wa_accessToken,
        auth[1].wa_phoneNumberId,
        auth[1].wa_wabaId)
        let logs = []
        try {
            for (let i = 0; i < phoneToNotificate.length; i++) {
                const msg = await connection.sendText({
                    recipientPhone: phoneToNotificate[i].phone,
                    message: message
                })
                logs.push(msg)  
            }
            return logs
        } catch (error) {
            console.error(error);
        }
}

module.exports = {
    sendMsgText
}
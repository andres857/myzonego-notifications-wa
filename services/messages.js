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

async function sendMsgWithButtons(){
}

async function sendMsgWithImage(auth,phoneToNotificate,image,message){
    const connection = newConnection(auth[1].wa_accessToken,
        auth[1].wa_phoneNumberId,
        auth[1].wa_wabaId)
    try {
        const msg = await connection.sendImage({
            recipientPhone: phoneToNotificate ,
            url: image,
            caption: message,
        });
        return msg
    } catch (error) {
        console.error(error);
    }

}

async function sendMsgWithVideo(auth,phoneToNotificate,video,message){
    const connection = newConnection(auth[1].wa_accessToken,
        auth[1].wa_phoneNumberId,
        auth[1].wa_wabaId)
        try {
            const msg = await connection.sendVideo({
                recipientPhone: phoneToNotificate,
                caption: message,
                url: video
            });
            return msg
        } catch (error) {
            console.error(error);
        }
}

module.exports = {
    sendMsgText,
    sendMsgWithButtons,
    sendMsgWithImage,
    sendMsgWithVideo
}
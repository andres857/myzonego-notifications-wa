const newConnection = require('../utils/waCloudApi')


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

module.exports = sendMsgWithImage
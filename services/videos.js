const newConnection = require('../utils/waCloudApi')

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
module.exports = sendMsgWithVideo
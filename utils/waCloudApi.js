const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');

function newConnection(wa_accessToken,wa_senderPhoneNumberId,wa_wabaId){
    const Whatsapp = new WhatsappCloudAPI({
        accessToken: wa_accessToken,
        senderPhoneNumberId: wa_senderPhoneNumberId,
        WABA_ID: wa_wabaId,
    });
    return Whatsapp
}

module.exports = newConnection





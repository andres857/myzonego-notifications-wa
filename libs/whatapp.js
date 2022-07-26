const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');
const config = require('../config')
const recipientName = 'andres'
const recipientPhone = '573007566519'

const Whatsapp = new WhatsappCloudAPI({
    accessToken: config.Meta_WA_accessToken,
    senderPhoneNumberId: config.Meta_WA_SenderPhoneNumberId,
    WABA_ID: config.Meta_WA_wabaId,
});

async function sendmsg(){
    try {
        await Whatsapp.sendSimpleButtons({
            message: `Hey ${recipientName}, \nYou are speaking to a chatbot.\nWhat do you want to do next?`,
            recipientPhone: recipientPhone, 
            listOfButtons: [
                {
                    title: 'View some products',
                    id: 'see_categories',
                },
                {
                    title: 'Speak to a human',
                    id: 'speak_to_human',
                },
            ],
        });
    } catch (error) {
        console.error(error);
    }
}

async function sendImages(){
    let text = `_Title_: **\n\n\n`;
    text += `_Description_: \n\n\n`;
    text += `_Price_: $\n`;
    text += `_Category_: \n`;
    text += ` shoppers liked this product.\n`;
    text += `_Rated_: \n`;
    text += `https://myzonego.com: \n`;

    await Whatsapp.sendImage({
        recipientPhone: recipientPhone ,
        url: 'https://fakeimg.pl/300/',
        caption: text,
        file_path: '',
        file_name: '',
    });
}

async function sendText(){
    await Whatsapp.sendText({
        recipientPhone: recipientPhone,
        message: `Your order has been fulfilled. Come and pick it up, as you pay, here:`,
    });
}

sendmsg()





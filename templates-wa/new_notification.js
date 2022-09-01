/*
new meeting created
Hola {{1}}, se agregó {{2}} {{3}} en el grupo {{4}} de tu zona privada {{5}}. Ingresa para ver más.
*/

const imageMessage = "https://pbs.twimg.com/media/FZ4fz2JXkAE2bfk?format=jpg&name=medium"

function template (phoneToNotificate,name,typeNotification,content_name,group,zone,urlImage){
    return {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneToNotificate,
        "type": "template",
        "template": {
            "name": "wc_new_notification",
            "language": {
                "code": "es"
            },
            "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "image",
                            "image": {
                                "link": urlImage || imageMessage
                            }
                        }
                    ]
                },
                {
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": name
                        },
                        {
                            "type": "text",
                            "text": typeNotification
                        },
                        {
                            "type": "text",
                            "text": content_name
                        },
                        {
                            "type": "text",
                            "text": group
                        },
                        {
                            "type": "text",
                            "text": zone
                        }
                    ]
                }
            ]
        }
    }
}

module.exports = template
/*
new meeting created
Hola {{1}}, se creó la sesión en vivo {{2}} en el grupo {{3}} de tu zona privada {{4}}. Ingresa para ver más.
name, live session, group, zone, url
*/

const imageMessage = "https://pbs.twimg.com/media/FZ4fz2JXkAE2bfk?format=jpg&name=medium"

function template (phoneToNotificate,name,livesession,group,zone,urlImage){
    return {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneToNotificate,
        "type": "template",
        "template": {
            "name": "new_meeting",
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
                            "text": livesession
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
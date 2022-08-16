// Nuevo foro creado
// Hola {{1}}, se agregó el foro *{{2}}* al grupo {{3}} de tu zona privada {{4}}. Ingresa para ver más.
// name, name forum , group, zone

const imageMessage = "https://pbs.twimg.com/media/FZ4fz2JXkAE2bfk?format=jpg&name=medium"

function template (phoneToNotificate,name,forum,group,zone,urlImage){
    return {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneToNotificate,
        "type": "template",
        "template": {
            "name": "new_forum",
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
                            "text": forum
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
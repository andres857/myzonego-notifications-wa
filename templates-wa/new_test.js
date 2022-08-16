/*
new task created
Hola {{1}}, se agregó la evaluación *{{2}}* en el grupo *{{3}}* de tu zona privada {{4}}. Ingresa para ver más.
name, test, group, zone, url
*/

const imageMessage = "https://pbs.twimg.com/media/FZ4fz2JXkAE2bfk?format=jpg&name=medium"

function template (phoneToNotificate,name,evaluation,group,urlImage){
    return {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneToNotificate,
        "type": "template",
        "template": {
            "name": "new_content_to_group",
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
                            "text": evaluation
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
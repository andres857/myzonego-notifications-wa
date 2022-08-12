/*
content Template
Hola {{1}}, se agregó el contenido *{{2}}* al grupo {{3}} de tu zona privada {{4}}. Ingresa para ver más.
*/

// name, nameContent, group, zone
const imageContents = "https://pbs.twimg.com/media/FZ4fz2JXkAE2bfk?format=jpg&name=medium"
const uri = "https://www.myzonego.com/storage/HOME_OFFICE_ybaJwzmtQ9/clubs/f15c9a5128203a4decd12ea52409544d61a693ebb56c3.jpg"
function template (phoneToNotificate,name,content,group,zone,urlImage){
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
                                "link": urlImage || imageContents
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
                            "text": content
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

// const request = template('3007566519','Andres','rest-API', 'Desarrollo','MyZoneGo',uri)
// console.table(request);

module.exports = template
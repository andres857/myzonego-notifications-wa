/*
new rating task created
Hola {{1}}, tu nota de la tarea {{2}} es {{3}} del grupo {{4}}. Ingresa para ver más.

*/

const imageMessage = "https://pbs.twimg.com/media/FZ4fz2JXkAE2bfk?format=jpg&name=medium"

function template (phoneToNotificate,name,task,ratingTask,urlImage){
    return {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneToNotificate,
        "type": "template",
        "template": {
            "name": "rating_task",
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
                            "text": task
                        },
                        {
                            "type": "text",
                            "text": ratingTask
                        }
                    ]
                }
            ]
        }
    }
}

module.exports = template
/*
content Template
Hola {{1}}, se agregó el contenido *{{2}}* al grupo {{3}} de tu zona privada {{4}}. Ingresa para ver más.
*/

// name, nameContent, group, zone
function template(phone){
    return {
        "messaging_product": "whatsapp", 
        "to": phone, 
        "type": "template", 
        "template": 
            { 
                "name": "new_content_to_group", 
                "language": 
                { 
                    "code": "en_US" 
                } 
            } 
    }
}

module.exports = template
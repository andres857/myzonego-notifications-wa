function template(phone, templateName){
    return {
        "messaging_product": "whatsapp", 
        "to": phone, 
        "type": "template", 
        "template": 
            { 
                "name": templateName, 
                "language": 
                { 
                    "code": "en_US" 
                } 
            } 
    }
}

module.exports = template






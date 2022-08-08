function template(phone){
    return {
        "messaging_product": "whatsapp", 
        "to": phone, 
        "type": "template", 
        "template": 
            { 
                "name": "hello_world", 
                "language": 
                { 
                    "code": "en_US" 
                } 
            } 
    }
}

module.exports = template






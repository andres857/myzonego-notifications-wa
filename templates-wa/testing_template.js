const urlImage = "https://www.myzonego.com/storage/HOME_OFFICE_ybaJwzmtQ9/clubs/f15c9a5128203a4decd12ea52409544d61a693ebb56c3.jpg"
const message = 'Gracias por comprar, Welcome Soon'


function template(phone, templateName,urlImage,message,lang){
    return {
        "messaging_product":"whatsapp",
        "recipient_type":"individual",
        "to": phone,
        "type":"template",
        "template":{
            "name":templateName,
            "language":{
            "code":lang || 'esp'
            },
        "components":[
            {
            "type":"header",
            "parameters":[
                {
                "type":"image",
                "image":{
                "link":urlImage
                }
                }
            ]
            },
        {
        "type":"body",
        "parameters":[
            {
            "type":"text",
            "text":message
            },
        ]
        }
        ]
        }
    }
}

//  generateTemplate('573007566519','sample_purchase_feedback', urlImage, message)
// console.log(templateNewMessage);

module.exports = template
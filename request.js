const request = {	
    "client": "HSJ",
	"auth": {
        "wa_accessToken":"{{ _.bearerToken }}",
		"wa_phoneNumberId":"{{ _.phoneID }}",
		"wa_wabaId":"{{ _.wbIdentify }}"
	},
	"message": {
		"type":"evaluation",
		"group":"Introduccion",
		"template":"hello_world",
		"image":"urlImage",
		"numbersToNotificate":[
			{
				"nombre":"Andres Guerrero",
				"phone": "573007566519"
			},
			{
				"nombre":"Jose Guerrero",
				"phone": "573007566519"
			}
		]
	}
}

module.exports = request
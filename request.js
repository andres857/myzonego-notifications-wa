const request = {	
	"client": "wc",
	  "auth": {
	  	  "wa_accessToken":"{{ _.bearerToken }}",
		  "wa_phoneNumberId":"{{ _.phoneID }}",
		  "wa_wabaId":"{{ _.wbIdentify }}"
	  },
	  "message": {
		  "template":"new_content_to_group",
		  "content_name": "visualizacion de datos",
		  "group":"Home Office",
		  "zone":"MyZoneGo",
		  "image":"https://www.myzonego.com/storage/HOME_OFFICE_ybaJwzmtQ9/clubs/f15c9a5128203a4decd12ea52409544d61a693ebb56c3.jpg",
		  "numbersToNotificate":[
			  {
				  "name":"Andres Guerrero",
				  "phone": "573007566519"
			  },
			  {
				  "name":"Andres Guerrero",
				  "phone": "573007566519"
			  },
			  {
				  "name":"Andres Guerrero",
				  "phone": "573007566519"
			  },
			  {
				  "name":"Andres Guerrero",
				  "phone": "573007566519"
			  },
			  {
				  "name":"Andres Guerrero",
				  "phone": "573007566519"
			  }
			  
		  ]
	  }
  }

module.exports = request
class notificacions_Service {
    // const timeConversation = 86400000 millisenconds 1 day 

    constructor(){
        this.notifications = [
            {   
                "id_client": "01",
                "name":"Andres Londono",
                "phone": "573007566519",
                "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            },
            {
                "id_client": "01",
                "name":"Andres Guerrero",
                "phone": "573007566520",
                "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            },
            {
                "id_client": "02",
                "name":"Jose Guerrero",
                "phone": "573007566518",
                "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            }
        ]
    }

    findConversation(conversation){
        // console.log(conversation);
        // verificar si el telefono existe en la lista de conversaciones activas
        let conversationfind = this.notifications.find(item => item.phone === conversation.phone)
        if(!conversationfind){
            console.log('not found');
            return false
        }else{
            console.log('find conversation');
            return true
        }
    }
}


module.exports = notificacions_Service




// const startConversation = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
const moment = require('moment')

class conversations_Services {
    // const timeConversation = 86400000 millisenconds 1 day 
    timeConversationTeenSeconds = 10000
    conversationCurrent = 0
    conversationAvailable = 1000
    
    constructor(){
        this.conversations = []
        this.generator()
    }

    generator(){
        this.conversations =  [
            {
                "phone": "573007566519",
                "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            },
            {
                "phone": "573007566520",
                "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            },
            {
                "phone": "573007566518",
                "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            }
        ]
    }

    available(){
        this.conversationAvailable = this.conversationAvailable - 1
        return this.conversationAvailable
    }

    current(){
        this.conversationCurrent = this.conversationCurrent + 1
        return this.conversationCurrent
    }

    findConversation(phone){
        let conversation = this.conversations.find(item => item.phone === phone)
        if(!conversation){
            console.log('agregar conversation');
            return false
        }else{
            console.log('ignorar');
            return true
        }
    }

    create(client,conversation){
        let conversationfound = this.findConversation(conversation.phone)
        if(conversationfound){
            console.log('La Conversacion ya Inicio');
            
            return {
                client,
                conversations: this.conversations
            }
        }else{
            // method to get conversations Available - DB
            let available = this.available()
            // method to get conversations Current - DB
            let currents = this.current() 
            this.conversations.push(conversation)
            return {
                client,
                available,
                currents,
                conversations: this.conversations
            }
        }  


    }
}


module.exports = conversations_Services




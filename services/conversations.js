// const startConversation = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

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
            // {   
            //     "id_client": "01",
            //     "name":"Andres Londono",
            //     "phone": "573007566519",
            //     "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            // },
            // {
            //     "id_client": "01",
            //     "name":"Jose Guerrero",
            //     "phone": "573007566520",
            //     "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            // },
            // {
            //     "id_client": "02",
            //     "name":"Andres Guerrero",
            //     "phone": "573007566518",
            //     "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
            // }
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

    getAvailableConversations(){
        return this.conversationAvailable
    }

    getCurrentConversations(){
        return this.conversationCurrent
    }

    findConversation(phone){
        let conversation = this.conversations.find(item => item.phone === phone)
        if(!conversation){
            return false
        }else{
            return true
        }
    }

    create(conversation){
        console.log(conversation);
        let conversationfound = this.findConversation(conversation.phone)
        if(conversationfound){
            console.log('La Conversacion ya Inicio');
            return {
                client: conversation.id_client,
                conversations: this.conversations
            }
        }else{
            // method to add conversations Available Conversations - DB
            
            this.conversationAvailable = this.conversationAvailable - 1
            // method to get conversations Current - DB
            this.conversationCurrent = this.conversationCurrent + 1
            // add Conversation 
            this.conversations.push(conversation)
            return {
                a: "saludos",
                client: conversation.id_client,
                available:this.conversationAvailable,
                current:this.conversationCurrent,
                conversations: this.conversations
            }
        }  
    }
}


module.exports = conversations_Services




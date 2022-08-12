// const startConversation = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
const moment = require('moment')
const dbconversations = require('../moc-db')
const dbConversations = require('../moc-db')


// const timeConversation = 86400000 millisenconds 1 day 
const timeConversationTeenSeconds = 10000
let conversationCurrent = 0
let conversationAvailable = 1000


function createConversation(client){
    // method to get conversations Available - DB
    conversationAvailable = conversationAvailable - 1
    // method to get conversations Current - DB
    conversationCurrent = conversationCurrent + 1
    return {
        client,
        conversationAvailable,
        conversationCurrent
    }
}

async function conversationsCurrent(client){
    // method to get conversations Current - DB
    const conversations = await dbconversations()
    conversations.forEach(element => {
        console.log(element.startConversation);
    });
}

conversationsCurrent()



// conversations('windows channel', timeConversationTeenSeconds)
//     .then(conversation => console.log(conversation))
//     .catch(e => console.log(` ***** ${e}`))
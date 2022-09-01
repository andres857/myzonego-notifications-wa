const notificationService = require('./services/notification')
const clientService = require('./services/clients')

const clientsWC = new clientService()
const clientsHSJ = new clientService()

const service = new notificationService()

console.log(service.findConversation({
        "id_client": "01",
        "name":"Jose Guerrero",
        "phone": "573007566521",
        "startConversation": "Friday, August 12th 2022, 3:40:03 pm",    
    }))

































// const conversations = new service()

// const conversationsr =  [
//     {   
//         "id_client": "01",
//         "name":"Andres Londono",
//         "phone": "573007566519",
//         "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
//     }
//     // {
//     //     "id_client": "01",
//     //     "name":"Jose Guerrero",
//     //     "phone": "573007566520",
//     //     "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
//     // },
//     // {
//     //     "id_client": "02",
//     //     "name":"Andres Guerrero",
//     //     "phone": "573007566518",
//     //     "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
//     // }
// ]

// function l(){
//     conversationsr.forEach(element => {
//         let ol = conversations.create(
//             {
//                 "id_client":"01",
//                 "name":"josele",
//                 "phone": element.phone,
//                 "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
//             })
//             console.log(ol);
//     });    
// }



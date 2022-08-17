const service = require('./services/conversations')

const conversations = new service()

const c = conversations.create('wc',
{
    "phone": "573007566519",
    "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
});

console.log(c);

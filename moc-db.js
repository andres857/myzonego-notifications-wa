

function dbconversations(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                [
                    {
                        "phone": "573007566519",
                        "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
                        "endsConversation": "Saturday, August 13th 2022, 3:40:03 pm"
                    },
                    {
                        "phone": "573007566520",
                        "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
                        "endsConversation": "Saturday, August 13th 2022, 3:40:03 pm"
                    },
                    {
                        "phone": "573007566518",
                        "startConversation": "Friday, August 12th 2022, 3:40:03 pm",
                        "endsConversation": "Saturday, August 13th 2022, 3:40:03 pm"
                    }
                ]
            )
        },500)
    })
}

module.exports = dbconversations

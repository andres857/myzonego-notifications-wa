const axios = require('axios')
const {oauth} = require('../config')
const graph = 'https://graph.facebook.com/v13.0/101157906035627/messages'

const obj = {
    "messaging_product": "whatsapp", 
    "to": "573007566519", 
    "type": "template", 
    "template": 
        { 
            "name": "hello_world", 
            "language": 
            { 
                "code": "en_US" 
            } 
        } 
}

const obj2 = {
    "messaging_product": "whatsapp", 
    "to": "573007566519", 
    "type": "template", 
    "template": 
        { 
            "name": "hello_world", 
            "language": 
            { 
                "code": "en_US" 
            } 
        } 
}

async function c1() {
    try {
        const c = await axios.post(graph,obj, {
            headers: {
              Authorization: `Bearer ${oauth.bearerToken}`,
            },
        })
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}

async function c2() {
    try {
        const c = await axios.post(graph,obj2, {
            headers: {
              Authorization: `Bearer ${oauth.bearerToken}`,
            },
        })
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    await c1()
    await c2()
}

main()

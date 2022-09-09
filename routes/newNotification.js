const express = require('express')
const router = express()
const moment = require('moment')
const newContent = require('../services/notifications/newContent')
const newGroup = require('../services/notifications/newGroup')
const newUser = require('../services/notifications/newUser')
const newVideoCalls = require('../services/notifications/newVideoCalls')
const ratingTask = require('../services/notifications/ratingTask')

router.post('/newContent',  async (req,res)=>{
    const { client, auth, message } = req.body
        newContent.sendTemplate( client, auth, message ).then(logs => {
            console.log(`routes ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} -------- ${logs}`);
            res.json({
                logs,
            })
        }).catch( e => {
            res.json({
                error: e
            })
        })
})

router.post('/newGroup', async(req,res)=>{
    const { client, auth, message} = req.body
    newGroup.sendTemplate( client, auth, message ).then(logs => {
        console.log(`routes ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} -------- ${logs}`);
        res.json({
            logs,
        })
    }).catch( e => {
        res.json({
            message,
            error: e
        })
    })

})

router.post('/newUser', async(req,res)=>{
    const { client, auth, message} = req.body
    newUser.sendTemplate( client, auth, message ).then(logs => {
        console.log(`routes ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} -------- ${logs}`);
        res.json({
            logs,
        })
    }).catch( e => {
        res.json({
            error: e
        })
    })
})

router.post('/newVideoCalls', async(req,res)=>{
    const { client, auth, message } = req.body
    newVideoCalls.sendTemplate( client, auth, message ).then( logs => {
        console.log(`routes ${ moment().format("dddd, MMMM Do YYYY, h:mm:ss a") } -------- ${logs} `);
        res.json({
            logs,
        })
    }).catch( e => {
        res.json({
            error: e
        })
    })
})

router.post('/ratingTask', async(req,res)=>{
    const { client, auth, message } = req.body
    ratingTask.sendTemplate( client, auth, message ).then( logs => {
        console.log(`routes ${ moment().format("dddd, MMMM Do YYYY, h:mm:ss a") } -------- ${logs} `);
        res.json({
            logs,
        })
    }).catch( e => {
        res.json({
            error: e
        })
    })
})

module.exports = router













const template_new_content_to_group = require('../templates-wa/new_content_to_group')
const template_new_forum = require('../templates-wa/new_forum.js')
const template_group_created = require('../templates-wa/new_group_created')
const template_meeting = require('../templates-wa/new_meeting')
const template_new_poll = require('../templates-wa/new_poll')
const template_new_task = require('../templates-wa/new_task')
const template_new_test = require('../templates-wa/new_test')
const template_new_user_add_to_privatezone = require('../templates-wa/new_user_add_to_privatezone')
const template_new_video_calls = require('../templates-wa/new_video_calls')
const template_rating_task = require('../templates-wa/rating_task')


function getTemplate(template,  data){

    if( template === "new_content_to_group" ){
        
        return template_new_content_to_group(element.phone, element.name, contentName, group, zone, urlImage)//SI   
    } else if(template === "new_forum"){
        return template_new_forum(element.phone, element.name, forum, group, zone, urlImage)//SI
    }else if(template === "new_meeting"){
        return template_meeting(element.phone, element.name, livesession, group, zone, urlImage)//SI
    }else if(template === "new_poll"){
        return template_new_poll(element.phone, element.name, poll, group, zone, urlImage)//SI
    }else if(template === "new_task"){
        return template_new_task(element.phone, element.name, task, group, zone, urlImage)//SI
    }else if(template === "new_test"){
        return template_new_test(element.phone, element.name, evaluation, group, urlImage)//SI modificar template
    }
    
    else if(template === "new_group_created"){
        return template_group_created(element.phone, element.name, group, urlImage)//NO
    }else if(template === "new_user_add_to_privatezone"){
        return template_new_user_add_to_privatezone(element.phone, element.name, privateZone, urlImage )//NO
    }else if(template === "new_video_calls"){
        return template_new_video_calls(element.phone, element.name, videocall, zone, urlImage)//NO
    }else if(template === "rating_task"){
        return template_rating_task(element.phone, element.name, task, ratingTask, urlImage)//NO
    }else{
        new Error('Template Not Found')
    }
}

module.exports = getTemplate

    
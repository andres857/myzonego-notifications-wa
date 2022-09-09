const newNotification = require('./newNotification');

// definir un middleware for handle routes
const route = '/api/v1/notifications/wa'

function routerApi(app){
    app.use(`${route}`, newNotification )
}

module.exports = routerApi
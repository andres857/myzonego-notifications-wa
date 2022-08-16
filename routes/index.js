const routerSendText = require('./sendNotification')

// definir un middleware for handle routes
const route = '/api/v1/notifications/wa'
function routerApi(app){
    app.use(`${route}/sendNotification`, routerSendText)
}

module.exports = routerApi
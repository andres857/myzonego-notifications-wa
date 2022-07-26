const routerSendText = require('./sendText')
const routerSendImage = require('./sendImage')
const routerSendVideo = require('./sendVideo')

// definir un middleware for handle routes
const route = '/api/v1/notifications/wa'
function routerApi(app){
    app.use(`${route}/sendText`, routerSendText)
    app.use(`${route}/sendImage`, routerSendImage)
    app.use(`${route}/sendVideo`, routerSendVideo)
}

module.exports = routerApi
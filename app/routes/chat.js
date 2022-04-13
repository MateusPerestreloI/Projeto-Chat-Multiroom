module.exports = function (application) {
    application.get('/chat', function (req, res) {
        application.app.controllers.chat.iniciarChat(application, req, res)
    })
}
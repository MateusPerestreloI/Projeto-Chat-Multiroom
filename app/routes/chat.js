const {check} = require('express-validator')
module.exports = function (application) {
    application.post('/chat',[
        check('apelido', 'Nome é obrigatório!').notEmpty(),
        check('apelido', 'Nome tem que ter entre 3 e 15 caracteres').isLength({ min: 3, max: 15 })
    ], function (req, res) {
        application.app.controllers.chat.iniciarChat(application, req, res)
    })
    application.get('/chat', function (req, res) {
        application.app.controllers.chat.iniciarChat(application, req, res)
    })
}
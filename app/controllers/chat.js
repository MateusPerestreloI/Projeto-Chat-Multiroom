const { validationResult} = require('express-validator')
module.exports.iniciarChat = function(application,req,res){
    const dadosForm = req.body

    var erros = validationResult(req)

    if(!erros.isEmpty()){
        res.render('index', {validacao: erros})
        return
    }

    application.get('io')
        .emit('msgParaCliente', {apelido: dadosForm.apelido, mensagem:' acabou de entrar no chat!'})

    res.render('chat')
}
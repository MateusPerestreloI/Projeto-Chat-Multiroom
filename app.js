// Importar as configurações do servidor
const app = require('./config/server')

// Parametrizar a porta de escuta
var server = app.listen(8080, function () {
    console.log('Server On')
})

var io = require('socket.io')(server)

app.set('io', io)

// Criar a conexão por websocket
io.on('connection', function (socket) {
    console.log('Usuário conectou')

    socket.on('disconnect', function () {
        console.log('Usuário desconectiou')
    })

    socket.on('msgParaServidor', function (data) {

        // Dialogo
        socket.emit('msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem })

        socket.broadcast.emit('msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem })

        // Participantes
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
        
        socket.emit('participantesParaCliente',
            { apelido: data.apelido})

        socket.broadcast.emit('participantesParaCliente',
            { apelido: data.apelido})
        }
    })
})
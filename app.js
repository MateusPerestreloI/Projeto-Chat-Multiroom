// Importar as configurações do servidor
const app = require('./config/server')

// Parametrizar a porta de escuta
var server = app.listen(8080,function(){
    console.log('Server On')
})

var io = require('socket.io')(server)

app.set('io', io)

// Criar a conexão por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou')

    socket.on('disconnect', function(){
        console.log('Usuário desconectiou')
    })
})
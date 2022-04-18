// Importar as configurações do servidor
const app = require('./config/server')

// Parametrizar a porta de escuta
var server = app.listen(8080,function(){
    console.log('Server On')
})

require('socket.io')(server)
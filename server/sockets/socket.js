const {
    io
} = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log('mensaje :>> ', data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!!!'
        //     });
        // }
    });

});
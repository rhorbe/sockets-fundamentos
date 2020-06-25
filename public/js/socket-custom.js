var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    // usuario: 'Rafael',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});

// Recibir información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Server message :>> ', mensaje);
})
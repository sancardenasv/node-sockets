var socket = io();
socket.on('connect', function() {
    console.log('Connected socket to the server');
});

socket.on('disconnect', function() {
    console.log('Lost connection with server');
});

// Push information to socket
socket.emit('sendingMessage', {
    user: 'santiago',
    msg: 'hello world'
}, function(resp) {
    console.log('Callback executed; server response: ', resp);
});

// Listen to socket
socket.on('sendingMessage', function(data) {
    console.log('Received data', data);
});
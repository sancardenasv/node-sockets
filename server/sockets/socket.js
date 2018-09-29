const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User conected with app');
    // Send message to client
    client.emit('sendingMessage', {
        user: 'admin',
        msg: 'welcome to the app!'
    })

    client.on('disconnect', () => {
        console.log('User disconected');
    });

    // Listen to socket
    client.on('sendingMessage', (data, callback) => {
        console.log(data);

        // Send Bradcast
        client.broadcast.emit('sendingMessage', data);

        // if (data.user) {
        //     callback({
        //         status: true,
        //         reason: 'data received'
        //     });
        // } else {
        //     callback({
        //         status: false,
        //         reason: 'NO user received'
        //     });
        // }
    });
});
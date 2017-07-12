var express = require('express');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
	console.log('client connected');
});

app.get('/change', (req, res) => {
	var num = req.query.num || '1';
	io.emit('change', num);
	res.send('ok');
});

http.listen(8000, () => {
	console.log('started');
});
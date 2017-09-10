const express = require('express'),
	app = new express();


app.get('/', (req, res) => {
	res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);


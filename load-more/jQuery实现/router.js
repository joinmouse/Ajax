//服务端 router.js

app.get('/loadMore', function(req, res) {

	var idx = req.query.idx
	var len = req.query.len
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('内容' + (parseInt(idx) + i))
	}

	res.send(data);
});
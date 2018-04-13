const express = require('express');
const cors = require('cors')
const soap = require('soap')
const app = express();

app.use(cors())



var ws_url = 'http://localhost:9999/ws/hello?wsdl'
//encodeURI(ws_url)


app.get('/', (req, res) => {
	var params = {arg0: req.query.q}
	//var opt = req.query.q
	soap.createClient(ws_url, function(err, client) {
	  client.setOption(params, function(err, result) {
	     console.log(result);
	     res.send(result)

          });
        });
});

app.listen(process.env.PORT || 3000)


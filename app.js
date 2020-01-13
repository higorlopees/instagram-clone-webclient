/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
const port = 80;

app.listen(port, function(){
	console.log('Server listening on port ' + port);
})

/*mongod –dbpath=C:\data\db –logpath=C:\data\db\log.txt –install*/
 /* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(3000, function(){
	console.log('Servidor online');
})
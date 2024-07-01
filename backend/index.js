const Server = require ("./server/server"); //importo el modulo del servidor (server.js)
const server = new Server(); //creo una nueva clase de ese modulo (instancear)
server.listen(); //llamo al método "escuchar las peticiones"


//index.js es el archivo principal donde vamos a ejecutar nuestro servidor
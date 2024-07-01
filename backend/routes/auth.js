//ESTO ES UN MODULO

const {Router} = require ("express"); //Router es el método de express para crear las rutas
const router = Router(); //se ejecuta el método en la constante router

//EN LOS MÓDULOS DE RUTA SE USAN LOS SUFIJOS (como "/login")
// http://localhost:8080/api/auth/login
// "/login" es el sufijo
router.post("/login", (req,res)=>{ //los métodos GET, PUT, POST Y DELETE reciben un callback o handeler. Va a estar pendiente de alguna petición que se haga en la ruta para responder a partir del callback. Para hacer eso necesita de dos objetos: REQUEST (req) y RESPONSE (res). Manejan la petición y la respuesta al cliente
    res.send("Me hiciste una petición")
})

module.exports=router;
const express = require ("express");
const cors = require ("cors");


//EN ESTE ARCHIVO SE USAN LOS PREFIJOS
class Server {
    constructor(){
        this.app=express();//coloco todas las funcionalidades de express en "app". De aquí en adelante, todos los pedidos que se hacen al servidor mediante express, se los hace como "app"
        this.port=8080;
        this.authPath="/api/auth";//rutas autorizadas (recurso para autorizar al usuario si tiene las credenciales solicitadas). API es el PREFIJO
        this.usersPath="/api/users";//recurso de react
        this.productsPath="/api/products";//recurso de react
        this.categoriesPath="/api/categories";//recurso de react
        this.routes();//función para poder crear las rutas anteriores
    }
    routes(){
        this.app.use(this.authPath, require("../routes/auth")); //se usa el método USE para indicar la ruta. En este caso, de authPath. Después se indica que eso se usa desde el módulo de la ruta indicada(donde van a estar las rutas realmente) que es el archivo auth.js (módulo). Por eso se lo requiere
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.productsPath, require("../routes/products"));
        this.app.use(this.categoriesPath, require("../routes/categories"));
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Servidor activo en el puerto:", this.port);
        })
    }
}

module.exports = Server;
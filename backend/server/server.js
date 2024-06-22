const express = require ("express");
const cors = require ("cors");

class Server {
    constructor(){
        this.app=express();
        this.port=8080;
        this.authPath="/api/auth";
        this.usersPath="/api/users";
        this.productsPath="/api/products";
        this.categoriesPath="/api/categories";
        this.routes();
    }
    routes(){
        this.app.use(this.authPath, require("../routes/auth"))
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Servidor activo en el puerto:", this.port);
        })
    }
}

module.exports=Server;
const {Router} = require ("express"); //Router es el método de express para crear las rutas
const router = Router(); //se ejecuta el método en la constante router


// http://localhost:8080/api/users/readUser
router.get("/readUsers", (req,res)=> {
    res.send("Estas haciendo GET a usuarios")
});

// http://localhost:8080/api/users/createUser
router.post("/createUser", (req,res)=>{ 
    res.send("Estas haciendo POST a usuarios")
});

// http://localhost:8080/api/users/updateUser
router.put("/updateUser", (req,res)=> {
    res.send("Estas haciendo PUT a usuarios")
});

// http://localhost:8080/api/users/deleteUser
router.delete("/deleteUser", (req,res)=> {
    res.send("Estas haciendo DELETE a usuarios")
});

module.exports=router;
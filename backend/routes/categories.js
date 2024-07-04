const {Router} = require ("express"); //Router es el método de express para crear las rutas. Express nos facilita los recursos y métodos para crear el servidor
const router = Router(); //se ejecuta el método en la constante router


// http://localhost:8080/api/categories/readCategories
router.get("/readCategories", (req,res)=> {
    res.send("Estas haciendo GET a categories")
});

// http://localhost:8080/api/categories/creatCategorie
router.post("/createCategorie", (req,res)=>{ 
    res.send("Estas haciendo POST a categories")
});

// http://localhost:8080/api/categories/updateCategorie
router.put("/updateCategorie", (req,res)=> {
    res.send("Estas haciendo PUT a categories")
});

// http://localhost:8080/api/categories/deletCategorie
router.delete("/deleteCategorie", (req,res)=> {
    res.send("Estas haciendo DELETE a categories")
});

module.exports=router;
const {Router} = require ("express"); //Router es el método de express para crear las rutas
const router = Router(); //se ejecuta el método en la constante router


// http://localhost:8080/api/products/readProducts
router.get("/readProducts", (req,res)=> {
    res.send("Estas haciendo GET a products")
});

// http://localhost:8080/api/products/createProduct
router.post("/createProduct", (req,res)=>{ 
    res.send("Estas haciendo POST a prod")
});

// http://localhost:8080/api/products/updateProduct
router.put("/updateProduct", (req,res)=> {
    res.send("Estas haciendo PUT a prod")
});

// http://localhost:8080/api/products/deleteProduct
router.delete("/deleteProduct", (req,res)=> {
    res.send("Estas haciendo DELETE a product")
});

module.exports=router;
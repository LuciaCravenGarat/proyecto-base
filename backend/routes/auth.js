const {Router} = require ("express");
const router = Router();

router.get("/login", (req,res)=>{
    res.send("Me hiciste una petición")
})

module.exports=router;
const router = require("express").Router();

router.post("/",(req,res)=>{
    res.send("API is working");
})

module.exports=router;
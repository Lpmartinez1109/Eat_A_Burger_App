var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", (req, res) =>{
    burger.all((data)=> {
        var obj = {
            burgers: data
        };
        res.render("index", obj);
    })
});
router.post("/api/:burger",(req, res)=>{
    burger.create(req.params.burger, (data)=>{
        res.redirect("/")
    })
} )

module.exports = router;

const express=require("express")
const router=express.Router()
const {home,gallery}=require("../controllers/home.controllers.js")
const {flower}=require("../controllers/flower.controller.js")


router.get("/",gallery)

router.get("/flower/:flowers",flower)


module.exports=router
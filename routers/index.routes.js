const express=require("express")
const router=express.Router()
const {home,gallery,form,about}=require("../controllers/home.controllers.js")


router.get("/",home)
router.get("/contact",form)
router.get("/about",about)


module.exports=router
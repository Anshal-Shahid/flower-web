const asyncHandler=require("express-async-handler")

const home=asyncHandler( async(req,res)=>{

    res.render("index.ejs")
})
const gallery=asyncHandler( async(req,res)=>{

    res.render("gallery.ejs")
})
const form=asyncHandler( async(req,res)=>{
    res.render("form.ejs")
})
const about=asyncHandler( async(req,res)=>{
    res.render("about.ejs")
})


module.exports={home,gallery,form,about}